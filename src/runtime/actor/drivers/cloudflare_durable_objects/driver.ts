// This file is only imported when the runtime is `cloudflare_workers_platform`.

import { ActorDriver } from "../../driver.ts";
import { Config } from "../../../mod.ts";
import { __GlobalDurableObject } from "./global_durable_object.ts";

// MARK: Driver
export const ACTOR_DRIVER: ActorDriver = {
	config: undefined as unknown as Config,
	async createActor(opts): Promise<void> {
		const stub = getStub(opts.moduleName, opts.actorName, opts.instanceName);
		return await stub.init({
			module: opts.moduleName,
			actor: opts.actorName,
			instance: opts.instanceName,
			input: opts.input,
		});
	},
	async callActor(opts): Promise<unknown> {
		const stub = getStub(opts.moduleName, opts.actorName, opts.instanceName);

		// HACK: Fixes "Type instantiation is excessively deep and possibly infinite."
		return await (stub as any).callRpc({
			fn: opts.fn,
			request: opts.request,
		});
	},
	async getOrCreateAndCallActor(opts): Promise<unknown> {
		const stub = getStub(opts.moduleName, opts.actorName, opts.instanceName);

		// HACK: Fixes "Type instantiation is excessively deep and possibly infinite."
		return await (stub as any).getOrCreateAndCallRpc({
			init: {
				module: opts.moduleName,
				actor: opts.actorName,
				instance: opts.instanceName,
				input: opts.input,
			},
			fn: opts.fn,
			request: opts.request,
		});
	},
	async actorExists(opts): Promise<boolean> {
		const stub = getStub(opts.moduleName, opts.actorName, opts.instanceName);
		return await stub.initialized();
	},
};

function getStub(
	moduleName: string,
	actorName: string,
	instanceName: string,
): DurableObjectStub<__GlobalDurableObject> {
	const ns = Deno.env.get("__GLOBAL_DURABLE_OBJECT") as any as DurableObjectNamespace<__GlobalDurableObject>;

	const module = ACTOR_DRIVER.config.modules[moduleName];
	const actor = module.actors[actorName];
	const name = `%%${module.storageAlias}%%${actor.storageAlias}%%${instanceName}`;
	const id = ns.idFromName(name);

	return ns.get(id);
}
