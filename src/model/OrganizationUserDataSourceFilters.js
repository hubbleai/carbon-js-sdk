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
import DocumentResponseSourceType from './DocumentResponseSourceType';
import Ids from './Ids';
import RevokedAccess from './RevokedAccess';

/**
 * The OrganizationUserDataSourceFilters model module.
 * @module model/OrganizationUserDataSourceFilters
 * @version 1.0.0
 */
class OrganizationUserDataSourceFilters {
    /**
     * Constructs a new <code>OrganizationUserDataSourceFilters</code>.
     * @alias module:model/OrganizationUserDataSourceFilters
     */
    constructor() { 
        
        OrganizationUserDataSourceFilters.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrganizationUserDataSourceFilters</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationUserDataSourceFilters} obj Optional instance to populate.
     * @return {module:model/OrganizationUserDataSourceFilters} The populated <code>OrganizationUserDataSourceFilters</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationUserDataSourceFilters();

            if (data.hasOwnProperty('source')) {
                obj['source'] = DocumentResponseSourceType.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('ids')) {
                obj['ids'] = Ids.constructFromObject(data['ids']);
            }
            if (data.hasOwnProperty('revoked_access')) {
                obj['revoked_access'] = RevokedAccess.constructFromObject(data['revoked_access']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrganizationUserDataSourceFilters</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrganizationUserDataSourceFilters</code>.
     */
    static validateJSON(data) {
        // validate the optional field `source`
        if (data['source']) { // data not null
          DocumentResponseSourceType.validateJSON(data['source']);
        }
        // validate the optional field `ids`
        if (data['ids']) { // data not null
          Ids.validateJSON(data['ids']);
        }
        // validate the optional field `revoked_access`
        if (data['revoked_access']) { // data not null
          RevokedAccess.validateJSON(data['revoked_access']);
        }

        return true;
    }


}



/**
 * @member {module:model/DocumentResponseSourceType} source
 */
OrganizationUserDataSourceFilters.prototype['source'] = undefined;

/**
 * @member {module:model/Ids} ids
 */
OrganizationUserDataSourceFilters.prototype['ids'] = undefined;

/**
 * @member {module:model/RevokedAccess} revoked_access
 */
OrganizationUserDataSourceFilters.prototype['revoked_access'] = undefined;






export default OrganizationUserDataSourceFilters;
