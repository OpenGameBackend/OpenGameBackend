// This file is auto-generated by the Open Game Backend (https://opengb.dev) build system.
//
// Do not edit this file directly.
//
// Generated at 2024-08-15T23:48:58.686Z

/* tslint:disable */
/* eslint-disable */

/**
 * @export
 * @interface RateLimitThrottlePublicResponse
 */
export interface RateLimitThrottlePublicResponse {}

/**
 * Check if a given object implements the RateLimitThrottlePublicResponse interface.
 */
export function instanceOfRateLimitThrottlePublicResponse(
	_value: object,
): _value is RateLimitThrottlePublicResponse {
	return true;
}

export function RateLimitThrottlePublicResponseFromJSON(
	json: any,
): RateLimitThrottlePublicResponse {
	return RateLimitThrottlePublicResponseFromJSONTyped(json, false);
}

export function RateLimitThrottlePublicResponseFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean,
): RateLimitThrottlePublicResponse {
	if (json == null) {
		return json;
	}
	return {};
}

export function RateLimitThrottlePublicResponseToJSON(
	value?: RateLimitThrottlePublicResponse | null,
): any {
	if (value == null) {
		return value;
	}
	return {};
}
