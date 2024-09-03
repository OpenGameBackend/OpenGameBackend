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
/**
 * 
 * @export
 * @interface LobbiesDestroyRequest
 */
export interface LobbiesDestroyRequest {
    /**
     * 
     * @type {string}
     * @memberof LobbiesDestroyRequest
     */
    lobbyId: string;
    /**
     * 
     * @type {string}
     * @memberof LobbiesDestroyRequest
     */
    reason?: string;
}

/**
 * Check if a given object implements the LobbiesDestroyRequest interface.
 */
export function instanceOfLobbiesDestroyRequest(value: object): value is LobbiesDestroyRequest {
    if (!('lobbyId' in value) || value['lobbyId'] === undefined) return false;
    return true;
}

export function LobbiesDestroyRequestFromJSON(json: any): LobbiesDestroyRequest {
    return LobbiesDestroyRequestFromJSONTyped(json, false);
}

export function LobbiesDestroyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LobbiesDestroyRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'lobbyId': json['lobbyId'],
        'reason': json['reason'] == null ? undefined : json['reason'],
    };
}

export function LobbiesDestroyRequestToJSON(value?: LobbiesDestroyRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'lobbyId': value['lobbyId'],
        'reason': value['reason'],
    };
}
