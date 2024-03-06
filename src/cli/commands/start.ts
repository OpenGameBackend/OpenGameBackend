import { join } from "../../deps.ts";
import { Command } from "../deps.ts";
import { GlobalOpts, initProject } from "../common.ts";
import { build, DbDriver, Format, Runtime } from "../../build/mod.ts";
import { ensurePostgresRunning } from "../../utils/postgres_daemon.ts";

export const startCommand = new Command<GlobalOpts>()
	.option("--no-build", "Don't build source files")
	.option("--no-check", "Don't check source files before running")
	.option("--no-watch", "Don't automatically restart server on changes")
	.action(
		async (opts) => {
			const project = await initProject(opts);

			await ensurePostgresRunning(project);

			const entrypointPath = join(project.path, "_gen", "entrypoint.ts");

			// Build project
			if (opts.build) {
				await build(project, {
					runtime: Runtime.Deno,
					format: Format.Native,
					dbDriver: DbDriver.NodePostgres,
				});
			}

			// Determine args
			const args = [
				"--allow-env",
				"--allow-net",
				"--allow-read",
			];
			if (opts.check) args.push("--check");
			if (opts.watch) args.push("--watch");

			// Run entrypoint
			const cmd = await new Deno.Command("deno", {
				args: [
					"run",
					...args,
					entrypointPath,
				],
				stdout: "inherit",
				stderr: "inherit",
			})
				.output();
			if (!cmd.success) throw new Error("Entrypoint failed");
		},
	);