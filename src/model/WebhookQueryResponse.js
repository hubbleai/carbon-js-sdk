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
 * The WebhookQueryResponse model module.
 * @module model/WebhookQueryResponse
 * @version 1.0.0
 */
class WebhookQueryResponse {
    /**
     * Constructs a new <code>WebhookQueryResponse</code>.
     * @alias module:model/WebhookQueryResponse
     * @param results {Object} 
     * @param count {Object} 
     */
    constructor(results, count) { 
        
        WebhookQueryResponse.initialize(this, results, count);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, results, count) { 
        obj['results'] = results;
        obj['count'] = count;
    }

    /**
     * Constructs a <code>WebhookQueryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookQueryResponse} obj Optional instance to populate.
     * @return {module:model/WebhookQueryResponse} The populated <code>WebhookQueryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookQueryResponse();

            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], Object);
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookQueryResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookQueryResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebhookQueryResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

WebhookQueryResponse.RequiredProperties = ["results", "count"];

/**
 * @member {Object} results
 */
WebhookQueryResponse.prototype['results'] = undefined;

/**
 * @member {Object} count
 */
WebhookQueryResponse.prototype['count'] = undefined;






export default WebhookQueryResponse;

