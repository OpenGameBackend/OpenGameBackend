import { exists, relative, resolve } from "../deps.ts";
import { glob, tjs } from "./deps.ts";
import { configPath as moduleConfigPath, readConfig as readModuleConfig } from "../config/module.ts";
import { ModuleConfig } from "../config/module.ts";
import { Script } from "./script.ts";
import { Project } from "./project.ts";
import { Registry } from "./registry.ts";
import { validateIdentifier } from "../types/identifiers/mod.ts";
import { Casing } from "../types/identifiers/defs.ts";
import { ProjectModuleConfig } from "../config/project.ts";
import { UserError } from "../error/mod.ts";

export interface Module {
	/**
	 * The path to the module in the project's _gen directory.
	 *
	 * This path can be modified and will be discarded on the next codegen.
	 */
	path: string;
	name: string;

	/**
	 * Config from the project.yaml file.
	 */
	projectModuleConfig: ProjectModuleConfig;

	/**
	 * Config from the module.yaml file.
	 */
	config: ModuleConfig;

	/**
	 * The registry that the module was pulled from.
	 */
	registry: Registry;

	/**
	 * The config passed to this module in the project.yaml file.
	 */
	userConfig: unknown;

	/**
	 * The schema for the module's config file.
	 *
	 * Generated from config.ts
	 */
	userConfigSchema?: tjs.Definition;

	scripts: Map<string, Script>;
	db?: ModuleDatabase;

	// Cache
	_hasUserConfigSchema?: boolean;
}

export interface ModuleDatabase {
	name: string;
}

export async function loadModule(
	modulePath: string,
	name: string,
	projectModuleConfig: ProjectModuleConfig,
	registry: Registry,
	signal?: AbortSignal,
): Promise<Module> {
	signal?.throwIfAborted();

	// Read config
	const config = await readModuleConfig(modulePath);

	// Find names of the expected scripts to find. Used to print error for extra scripts.
	const scriptsPath = resolve(modulePath, "scripts");
	const expectedScripts = new Set(
		await glob.glob("*.ts", { cwd: resolve(modulePath, "scripts") }),
	);

	// Read scripts
	const scripts = new Map<string, Script>();
	for (const scriptName in config.scripts) {
		validateIdentifier(scriptName, Casing.Snake);

		// Load script
		const scriptPath = resolve(
			scriptsPath,
			scriptName + ".ts",
		);
		if (!await exists(scriptPath)) {
			throw new UserError(
				`Script not found at ${relative(Deno.cwd(), scriptPath)}.`,
				{
					suggest: "Check the scripts in the module.yaml are configured correctly.",
					path: moduleConfigPath(modulePath),
				},
			);
		}

		const script: Script = {
			path: scriptPath,
			name: scriptName,
			config: config.scripts[scriptName],
		};
		scripts.set(scriptName, script);

		// Remove script
		expectedScripts.delete(scriptName + ".ts");
	}

	// Throw error extra scripts
	if (expectedScripts.size > 0) {
		const scriptList = Array.from(expectedScripts).map((x) => `- ${resolve(scriptsPath, x)}\n`);
		throw new UserError(
			`Found extra scripts not registered in module.yaml.`,
			{ details: scriptList.join(""), suggest: "Add these scripts to the module.yaml file.", path: scriptsPath },
		);
	}

	// Verify error names
	for (const errorName in config.errors) {
		validateIdentifier(errorName, Casing.Snake);
	}

	// Load db config
	let db: ModuleDatabase | undefined = undefined;
	if (await exists(resolve(modulePath, "db"), { isDirectory: true })) {
		db = {
			name: `module_${name.replace("-", "_")}`,
		};
	}

	// Derive config
	const userConfig = projectModuleConfig.config ?? null;

	return {
		path: modulePath,
		name,
		projectModuleConfig,
		userConfig,
		config,
		registry,
		scripts,
		db,
	};
}

export function moduleGenPath(
	_project: Project,
	module: Module,
): string {
	return resolve(
		module.path,
		"_gen",
		"mod.ts",
	);
}

export function testGenPath(_project: Project, module: Module): string {
	return resolve(
		module.path,
		"_gen",
		"test.ts",
	);
}

export function typeGenPath(_project: Project, module: Module): string {
	return resolve(
		module.path,
		"_gen",
		"dependencies.d.ts",
	);
}

export function configPath(module: Module): string {
	return resolve(module.path, "config.ts");
}

export async function hasUserConfigSchema(module: Module): Promise<boolean> {
	if (module._hasUserConfigSchema === undefined) {
		module._hasUserConfigSchema = await exists(configPath(module));
	}

	return module._hasUserConfigSchema;
}
