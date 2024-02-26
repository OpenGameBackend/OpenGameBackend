import { ScriptContext } from "../_gen/scripts/throttle.ts";

export interface Request {
	/**
	 * The preset to use for rate limiting.
	 */
	preset?: string;

	/**
	 * Number of requests in `period` before rate limiting.
	 * @default 20
	 */
	requests?: number;

	/**
	 * How frequently to reset the request counter.
	 * @default 300
	 */
	period?: number;
}

export interface Response {
}

export async function run(
	_ctx: ScriptContext,
	_req: Request,
): Promise<Response> {
	// TODO:

	return {};
}
