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
 * The PresignedURLResponse model module.
 * @module model/PresignedURLResponse
 * @version 1.0.0
 */
class PresignedURLResponse {
    /**
     * Constructs a new <code>PresignedURLResponse</code>.
     * @alias module:model/PresignedURLResponse
     * @param presignedUrl {Object} 
     */
    constructor(presignedUrl) { 
        
        PresignedURLResponse.initialize(this, presignedUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, presignedUrl) { 
        obj['presigned_url'] = presignedUrl;
    }

    /**
     * Constructs a <code>PresignedURLResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PresignedURLResponse} obj Optional instance to populate.
     * @return {module:model/PresignedURLResponse} The populated <code>PresignedURLResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PresignedURLResponse();

            if (data.hasOwnProperty('presigned_url')) {
                obj['presigned_url'] = ApiClient.convertToType(data['presigned_url'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PresignedURLResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PresignedURLResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PresignedURLResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

PresignedURLResponse.RequiredProperties = ["presigned_url"];

/**
 * @member {Object} presigned_url
 */
PresignedURLResponse.prototype['presigned_url'] = undefined;






export default PresignedURLResponse;
