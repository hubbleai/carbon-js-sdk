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
import OrderDir from './OrderDir';
import Pagination from './Pagination';
import WebhookFilters from './WebhookFilters';
import WebhookOrderByColumns from './WebhookOrderByColumns';

/**
 * The WebhookQueryInput model module.
 * @module model/WebhookQueryInput
 * @version 1.0.0
 */
class WebhookQueryInput {
    /**
     * Constructs a new <code>WebhookQueryInput</code>.
     * @alias module:model/WebhookQueryInput
     */
    constructor() { 
        
        WebhookQueryInput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookQueryInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookQueryInput} obj Optional instance to populate.
     * @return {module:model/WebhookQueryInput} The populated <code>WebhookQueryInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookQueryInput();

            if (data.hasOwnProperty('pagination')) {
                obj['pagination'] = ApiClient.convertToType(data['pagination'], Pagination);
            }
            if (data.hasOwnProperty('order_by')) {
                obj['order_by'] = ApiClient.convertToType(data['order_by'], WebhookOrderByColumns);
            }
            if (data.hasOwnProperty('order_dir')) {
                obj['order_dir'] = ApiClient.convertToType(data['order_dir'], OrderDir);
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], WebhookFilters);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebhookQueryInput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookQueryInput</code>.
     */
    static validateJSON(data) {
        // validate the optional field `pagination`
        if (data['pagination']) { // data not null
          Pagination.validateJSON(data['pagination']);
        }
        // validate the optional field `filters`
        if (data['filters']) { // data not null
          WebhookFilters.validateJSON(data['filters']);
        }

        return true;
    }


}



/**
 * @member {module:model/Pagination} pagination
 */
WebhookQueryInput.prototype['pagination'] = undefined;

/**
 * @member {module:model/WebhookOrderByColumns} order_by
 */
WebhookQueryInput.prototype['order_by'] = undefined;

/**
 * @member {module:model/OrderDir} order_dir
 */
WebhookQueryInput.prototype['order_dir'] = undefined;

/**
 * @member {module:model/WebhookFilters} filters
 */
WebhookQueryInput.prototype['filters'] = undefined;






export default WebhookQueryInput;

