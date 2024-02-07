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
 * The FileContentTypes model module.
 * @module model/FileContentTypes
 * @version 1.0.0
 */
class FileContentTypes {
    /**
     * Constructs a new <code>FileContentTypes</code>.
     * @alias module:model/FileContentTypes
     */
    constructor() { 
        
        FileContentTypes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileContentTypes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileContentTypes} obj Optional instance to populate.
     * @return {module:model/FileContentTypes} The populated <code>FileContentTypes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileContentTypes();

        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileContentTypes</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileContentTypes</code>.
     */
    static validateJSON(data) {

        return true;
    }


}








export default FileContentTypes;
