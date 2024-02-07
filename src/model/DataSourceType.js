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
 * The DataSourceType model module.
 * @module model/DataSourceType
 * @version 1.0.0
 */
class DataSourceType {
    /**
     * Constructs a new <code>DataSourceType</code>.
     * @alias module:model/DataSourceType
     */
    constructor() { 
        
        DataSourceType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DataSourceType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DataSourceType} obj Optional instance to populate.
     * @return {module:model/DataSourceType} The populated <code>DataSourceType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DataSourceType();

        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DataSourceType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DataSourceType</code>.
     */
    static validateJSON(data) {

        return true;
    }


}








export default DataSourceType;

