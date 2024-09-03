/* tslint:disable */
/* eslint-disable */
/**
 * Open Game Backend
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { LobbiesCreateResponseLobbyBackendServerPortsValue } from './LobbiesCreateResponseLobbyBackendServerPortsValue';
import {
    LobbiesCreateResponseLobbyBackendServerPortsValueFromJSON,
    LobbiesCreateResponseLobbyBackendServerPortsValueFromJSONTyped,
    LobbiesCreateResponseLobbyBackendServerPortsValueToJSON,
} from './LobbiesCreateResponseLobbyBackendServerPortsValue';

/**
 * 
 * @export
 * @interface LobbiesCreateResponseLobbyBackendServer
 */
export interface LobbiesCreateResponseLobbyBackendServer {
    /**
     * 
     * @type {string}
     * @memberof LobbiesCreateResponseLobbyBackendServer
     */
    serverId: string;
    /**
     * 
     * @type {object}
     * @memberof LobbiesCreateResponseLobbyBackendServer
     */
    ports?: object;
}

/**
 * Check if a given object implements the LobbiesCreateResponseLobbyBackendServer interface.
 */
export function instanceOfLobbiesCreateResponseLobbyBackendServer(value: object): value is LobbiesCreateResponseLobbyBackendServer {
    if (!('serverId' in value) || value['serverId'] === undefined) return false;
    return true;
}

export function LobbiesCreateResponseLobbyBackendServerFromJSON(json: any): LobbiesCreateResponseLobbyBackendServer {
    return LobbiesCreateResponseLobbyBackendServerFromJSONTyped(json, false);
}

export function LobbiesCreateResponseLobbyBackendServerFromJSONTyped(json: any, ignoreDiscriminator: boolean): LobbiesCreateResponseLobbyBackendServer {
    if (json == null) {
        return json;
    }
    return {
        
        'serverId': json['serverId'],
        'ports': json['ports'] == null ? undefined : json['ports'],
    };
}

export function LobbiesCreateResponseLobbyBackendServerToJSON(value?: LobbiesCreateResponseLobbyBackendServer | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'serverId': value['serverId'],
        'ports': value['ports'],
    };
}
