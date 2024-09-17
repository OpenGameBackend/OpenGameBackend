// This file is auto-generated by the Open Game Backend (https://opengb.dev) build system.
//
// Do not edit this file directly.
//
// Generated at 2024-08-15T23:48:58.886Z

import * as runtime from "../../runtime";

import type {
	TokensCreateRequest,
	TokensCreateResponse,
} from "../../models/index";
import {
	TokensCreateRequestToJSON,
	TokensCreateResponseFromJSON,
} from "../../models/index";

import type {
	TokensFetchRequest,
	TokensFetchResponse,
} from "../../models/index";
import {
	TokensFetchRequestToJSON,
	TokensFetchResponseFromJSON,
} from "../../models/index";

import type {
	TokensFetchByTokenRequest,
	TokensFetchByTokenResponse,
} from "../../models/index";
import {
	TokensFetchByTokenRequestToJSON,
	TokensFetchByTokenResponseFromJSON,
} from "../../models/index";

import type {
	TokensRevokeRequest,
	TokensRevokeResponse,
} from "../../models/index";
import {
	TokensRevokeRequestToJSON,
	TokensRevokeResponseFromJSON,
} from "../../models/index";

import type {
	TokensValidateRequest,
	TokensValidateResponse,
} from "../../models/index";
import {
	TokensValidateRequestToJSON,
	TokensValidateResponseFromJSON,
} from "../../models/index";

import type {
	TokensExtendRequest,
	TokensExtendResponse,
} from "../../models/index";
import {
	TokensExtendRequestToJSON,
	TokensExtendResponseFromJSON,
} from "../../models/index";

export class Tokens extends runtime.BaseAPI {
	public async create(
		request: TokensCreateRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<TokensCreateResponse> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};
		headerParameters["Content-Type"] = "application/json";

		const response = await this.request({
			path: `/modules/tokens/scripts/create/call`,
			method: "POST",
			headers: headerParameters,
			query: queryParameters,
			body: TokensCreateRequestToJSON(request),
		}, initOverrides);

		return TokensCreateResponseFromJSON(await response.json());
	}

	public async fetch(
		request: TokensFetchRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<TokensFetchResponse> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};
		headerParameters["Content-Type"] = "application/json";

		const response = await this.request({
			path: `/modules/tokens/scripts/fetch/call`,
			method: "POST",
			headers: headerParameters,
			query: queryParameters,
			body: TokensFetchRequestToJSON(request),
		}, initOverrides);

		return TokensFetchResponseFromJSON(await response.json());
	}

	public async fetchByToken(
		request: TokensFetchByTokenRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<TokensFetchByTokenResponse> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};
		headerParameters["Content-Type"] = "application/json";

		const response = await this.request({
			path: `/modules/tokens/scripts/fetch_by_token/call`,
			method: "POST",
			headers: headerParameters,
			query: queryParameters,
			body: TokensFetchByTokenRequestToJSON(request),
		}, initOverrides);

		return TokensFetchByTokenResponseFromJSON(await response.json());
	}

	public async revoke(
		request: TokensRevokeRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<TokensRevokeResponse> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};
		headerParameters["Content-Type"] = "application/json";

		const response = await this.request({
			path: `/modules/tokens/scripts/revoke/call`,
			method: "POST",
			headers: headerParameters,
			query: queryParameters,
			body: TokensRevokeRequestToJSON(request),
		}, initOverrides);

		return TokensRevokeResponseFromJSON(await response.json());
	}

	public async validate(
		request: TokensValidateRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<TokensValidateResponse> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};
		headerParameters["Content-Type"] = "application/json";

		const response = await this.request({
			path: `/modules/tokens/scripts/validate/call`,
			method: "POST",
			headers: headerParameters,
			query: queryParameters,
			body: TokensValidateRequestToJSON(request),
		}, initOverrides);

		return TokensValidateResponseFromJSON(await response.json());
	}

	public async extend(
		request: TokensExtendRequest,
		initOverrides?: RequestInit | runtime.InitOverrideFunction,
	): Promise<TokensExtendResponse> {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};
		headerParameters["Content-Type"] = "application/json";

		const response = await this.request({
			path: `/modules/tokens/scripts/extend/call`,
			method: "POST",
			headers: headerParameters,
			query: queryParameters,
			body: TokensExtendRequestToJSON(request),
		}, initOverrides);

		return TokensExtendResponseFromJSON(await response.json());
	}
}