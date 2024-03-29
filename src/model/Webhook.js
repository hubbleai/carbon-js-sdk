/**
 * Carbon
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Webhook model module.
 * @module model/Webhook
 * @version 1.0.0
 */
class Webhook {
    /**
     * Constructs a new <code>Webhook</code>.
     * @alias module:model/Webhook
     * @param id {Object} 
     * @param organizationId {Object} 
     * @param url {Object} 
     * @param signingKey {Object} 
     * @param createdAt {Object} 
     * @param updatedAt {Object} 
     */
    constructor(id, organizationId, url, signingKey, createdAt, updatedAt) { 
        
        Webhook.initialize(this, id, organizationId, url, signingKey, createdAt, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, organizationId, url, signingKey, createdAt, updatedAt) { 
        obj['id'] = id;
        obj['organization_id'] = organizationId;
        obj['url'] = url;
        obj['signing_key'] = signingKey;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
    }

    /**
     * Constructs a <code>Webhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Webhook} obj Optional instance to populate.
     * @return {module:model/Webhook} The populated <code>Webhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Webhook();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], Object);
            }
            if (data.hasOwnProperty('organization_id')) {
                obj['organization_id'] = ApiClient.convertToType(data['organization_id'], Object);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], Object);
            }
            if (data.hasOwnProperty('signing_key')) {
                obj['signing_key'] = ApiClient.convertToType(data['signing_key'], Object);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], Object);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Webhook</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Webhook</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Webhook.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

Webhook.RequiredProperties = ["id", "organization_id", "url", "signing_key", "created_at", "updated_at"];

/**
 * @member {Object} id
 */
Webhook.prototype['id'] = undefined;

/**
 * @member {Object} organization_id
 */
Webhook.prototype['organization_id'] = undefined;

/**
 * @member {Object} url
 */
Webhook.prototype['url'] = undefined;

/**
 * @member {Object} signing_key
 */
Webhook.prototype['signing_key'] = undefined;

/**
 * @member {Object} created_at
 */
Webhook.prototype['created_at'] = undefined;

/**
 * @member {Object} updated_at
 */
Webhook.prototype['updated_at'] = undefined;






export default Webhook;

