// This file is auto-generated by the Open Game Backend (https://opengb.dev) build system.
//
// Do not edit this file directly.
//
// Generated at 2024-08-15T23:48:58.911Z

/* tslint:disable */
/* eslint-disable */

/**
 * @export
 * @interface LobbiesSetLobbyReadyResponse
 */
export interface LobbiesSetLobbyReadyResponse {}

/**
 * Check if a given object implements the LobbiesSetLobbyReadyResponse interface.
 */
export function instanceOfLobbiesSetLobbyReadyResponse(
	_value: object,
): _value is LobbiesSetLobbyReadyResponse {
	return true;
}

export function LobbiesSetLobbyReadyResponseFromJSON(
	json: any,
): LobbiesSetLobbyReadyResponse {
	return LobbiesSetLobbyReadyResponseFromJSONTyped(json, false);
}

export function LobbiesSetLobbyReadyResponseFromJSONTyped(
	json: any,
	ignoreDiscriminator: boolean,
): LobbiesSetLobbyReadyResponse {
	if (json == null) {
		return json;
	}
	return {};
}

export function LobbiesSetLobbyReadyResponseToJSON(
	value?: LobbiesSetLobbyReadyResponse | null,
): any {
	if (value == null) {
		return value;
	}
	return {};
}