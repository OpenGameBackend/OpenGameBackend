// This file is auto-generated by the Open Game Backend (https://opengb.dev) build system.
//
// Do not edit this file directly.
//
// Generated at 2024-08-15T23:48:58.736Z

/* tslint:disable */
/* eslint-disable */

/**
 * @export
 * @interface TokensCreateResponse
 */
export interface TokensCreateResponse {}

/**
 * Check if a given object implements the TokensCreateResponse interface.
 */
export function instanceOfTokensCreateResponse(
	_value: object,
): _value is TokensCreateResponse {
	return true;
}

export function TokensCreateResponseFromJSON(json: any): TokensCreateResponse {
	return TokensCreateResponseFromJSONTyped(json, false);
}

export function TokensCreateResponseFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean,
): TokensCreateResponse {
	if (json == null) {
		return json;
	}
	return {};
}

export function TokensCreateResponseToJSON(
	value?: TokensCreateResponse | null,
): any {
	if (value == null) {
		return value;
	}
	return {};
}
