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
 * The SyncDirectoryRequest model module.
 * @module model/SyncDirectoryRequest
 * @version 1.0.0
 */
class SyncDirectoryRequest {
    /**
     * Constructs a new <code>SyncDirectoryRequest</code>.
     * @alias module:model/SyncDirectoryRequest
     * @param dataSourceId {Object} 
     */
    constructor(dataSourceId) { 
        
        SyncDirectoryRequest.initialize(this, dataSourceId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dataSourceId) { 
        obj['data_source_id'] = dataSourceId;
    }

    /**
     * Constructs a <code>SyncDirectoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SyncDirectoryRequest} obj Optional instance to populate.
     * @return {module:model/SyncDirectoryRequest} The populated <code>SyncDirectoryRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SyncDirectoryRequest();

            if (data.hasOwnProperty('data_source_id')) {
                obj['data_source_id'] = ApiClient.convertToType(data['data_source_id'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SyncDirectoryRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SyncDirectoryRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SyncDirectoryRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

SyncDirectoryRequest.RequiredProperties = ["data_source_id"];

/**
 * @member {Object} data_source_id
 */
SyncDirectoryRequest.prototype['data_source_id'] = undefined;






export default SyncDirectoryRequest;

