// This file is auto-generated by the Open Game Backend (https://opengb.dev) build system.
//
// Do not edit this file directly.
//
// Generated at 2024-08-15T23:48:58.787Z

/* tslint:disable */
/* eslint-disable */

/**
 * @export
 * @interface TokensFetchByTokenRequest
 */
export interface TokensFetchByTokenRequest {}

/**
 * Check if a given object implements the TokensFetchByTokenRequest interface.
 */
export function instanceOfTokensFetchByTokenRequest(
	_value: object,
): _value is TokensFetchByTokenRequest {
	return true;
}

export function TokensFetchByTokenRequestFromJSON(
	json: any,
): TokensFetchByTokenRequest {
	return TokensFetchByTokenRequestFromJSONTyped(json, false);
}

export function TokensFetchByTokenRequestFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean,
): TokensFetchByTokenRequest {
	if (json == null) {
		return json;
	}
	return {};
}

export function TokensFetchByTokenRequestToJSON(
	value?: TokensFetchByTokenRequest | null,
): any {
	if (value == null) {
		return value;
	}
	return {};
}