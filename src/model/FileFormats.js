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
 * The FileFormats model module.
 * @module model/FileFormats
 * @version 1.0.0
 */
class FileFormats {
    /**
     * Constructs a new <code>FileFormats</code>.
     * @alias module:model/FileFormats
     */
    constructor() { 
        
        FileFormats.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FileFormats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileFormats} obj Optional instance to populate.
     * @return {module:model/FileFormats} The populated <code>FileFormats</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileFormats();

        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileFormats</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileFormats</code>.
     */
    static validateJSON(data) {

        return true;
    }


}








export default FileFormats;

