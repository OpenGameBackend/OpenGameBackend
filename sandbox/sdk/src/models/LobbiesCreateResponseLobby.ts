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
import type { LobbiesCreateResponseLobbyBackend } from './LobbiesCreateResponseLobbyBackend';
import {
    LobbiesCreateResponseLobbyBackendFromJSON,
    LobbiesCreateResponseLobbyBackendFromJSONTyped,
    LobbiesCreateResponseLobbyBackendToJSON,
} from './LobbiesCreateResponseLobbyBackend';

/**
 * 
 * @export
 * @interface LobbiesCreateResponseLobby
 */
export interface LobbiesCreateResponseLobby {
    /**
     * 
     * @type {string}
     * @memberof LobbiesCreateResponseLobby
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof LobbiesCreateResponseLobby
     */
    version: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof LobbiesCreateResponseLobby
     */
    tags: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof LobbiesCreateResponseLobby
     */
    createdAt: number;
    /**
     * 
     * @type {number}
     * @memberof LobbiesCreateResponseLobby
     */
    readyAt?: number;
    /**
     * 
     * @type {number}
     * @memberof LobbiesCreateResponseLobby
     */
    players: number;
    /**
     * 
     * @type {number}
     * @memberof LobbiesCreateResponseLobby
     */
    maxPlayers: number;
    /**
     * 
     * @type {number}
     * @memberof LobbiesCreateResponseLobby
     */
    maxPlayersDirect: number;
    /**
     * 
     * @type {LobbiesCreateResponseLobbyBackend}
     * @memberof LobbiesCreateResponseLobby
     */
    backend: LobbiesCreateResponseLobbyBackend;
}

/**
 * Check if a given object implements the LobbiesCreateResponseLobby interface.
 */
export function instanceOfLobbiesCreateResponseLobby(value: object): value is LobbiesCreateResponseLobby {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('tags' in value) || value['tags'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('players' in value) || value['players'] === undefined) return false;
    if (!('maxPlayers' in value) || value['maxPlayers'] === undefined) return false;
    if (!('maxPlayersDirect' in value) || value['maxPlayersDirect'] === undefined) return false;
    if (!('backend' in value) || value['backend'] === undefined) return false;
    return true;
}

export function LobbiesCreateResponseLobbyFromJSON(json: any): LobbiesCreateResponseLobby {
    return LobbiesCreateResponseLobbyFromJSONTyped(json, false);
}

export function LobbiesCreateResponseLobbyFromJSONTyped(json: any, ignoreDiscriminator: boolean): LobbiesCreateResponseLobby {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'version': json['version'],
        'tags': json['tags'],
        'createdAt': json['createdAt'],
        'readyAt': json['readyAt'] == null ? undefined : json['readyAt'],
        'players': json['players'],
        'maxPlayers': json['maxPlayers'],
        'maxPlayersDirect': json['maxPlayersDirect'],
        'backend': LobbiesCreateResponseLobbyBackendFromJSON(json['backend']),
    };
}

export function LobbiesCreateResponseLobbyToJSON(value?: LobbiesCreateResponseLobby | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'version': value['version'],
        'tags': value['tags'],
        'createdAt': value['createdAt'],
        'readyAt': value['readyAt'],
        'players': value['players'],
        'maxPlayers': value['maxPlayers'],
        'maxPlayersDirect': value['maxPlayersDirect'],
        'backend': LobbiesCreateResponseLobbyBackendToJSON(value['backend']),
    };
}

