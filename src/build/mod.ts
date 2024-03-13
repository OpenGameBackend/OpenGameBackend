import { Project } from "../project/project.ts";
import { ensurePostgresRunning } from "../utils/postgres_daemon.ts";
import { createBuildState, shutdownBuildState } from "../build_state/mod.ts";
import { success } from "../term/status.ts";
import { planProjectBuild } from "./plan/project.ts";

/**
 * Which format to use for building.
 */
export enum Format {
	Native,
	Bundled,
}

/**
 * Which runtime to target when building.
 */
export enum Runtime {
	Deno,
	Cloudflare,
}

/**
 * Which DB driver to use for the runtime.
 */
export enum DbDriver {
	NodePostgres,
	NeonServerless,
}

/**
 * Stores options used in the build command.
 */
export interface BuildOpts {
	format: Format;
	runtime: Runtime;
	dbDriver: DbDriver;
}

export async function build(project: Project, opts: BuildOpts) {
	// Required for `migrateDev` and `migrateDeploy`
	await ensurePostgresRunning(project);

	const buildState = await createBuildState(project);

	await planProjectBuild(buildState, project, opts);

	await shutdownBuildState(buildState);

	success("Success");
}
