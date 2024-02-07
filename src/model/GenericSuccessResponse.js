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
 * The GenericSuccessResponse model module.
 * @module model/GenericSuccessResponse
 * @version 1.0.0
 */
class GenericSuccessResponse {
    /**
     * Constructs a new <code>GenericSuccessResponse</code>.
     * @alias module:model/GenericSuccessResponse
     * @param success {Object} 
     */
    constructor(success) { 
        
        GenericSuccessResponse.initialize(this, success);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, success) { 
        obj['success'] = success;
    }

    /**
     * Constructs a <code>GenericSuccessResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenericSuccessResponse} obj Optional instance to populate.
     * @return {module:model/GenericSuccessResponse} The populated <code>GenericSuccessResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenericSuccessResponse();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GenericSuccessResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GenericSuccessResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GenericSuccessResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

GenericSuccessResponse.RequiredProperties = ["success"];

/**
 * @member {Object} success
 */
GenericSuccessResponse.prototype['success'] = undefined;






export default GenericSuccessResponse;
