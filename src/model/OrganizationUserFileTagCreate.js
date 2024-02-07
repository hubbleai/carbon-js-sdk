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
import Tags2AnyOfValue from './Tags2AnyOfValue';

/**
 * The OrganizationUserFileTagCreate model module.
 * @module model/OrganizationUserFileTagCreate
 * @version 1.0.0
 */
class OrganizationUserFileTagCreate {
    /**
     * Constructs a new <code>OrganizationUserFileTagCreate</code>.
     * @alias module:model/OrganizationUserFileTagCreate
     * @param organizationUserFileId {Object} 
     * @param tags {Object.<String, module:model/Tags2AnyOfValue>} 
     */
    constructor(organizationUserFileId, tags) { 
        
        OrganizationUserFileTagCreate.initialize(this, organizationUserFileId, tags);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, organizationUserFileId, tags) { 
        obj['organization_user_file_id'] = organizationUserFileId;
        obj['tags'] = tags;
    }

    /**
     * Constructs a <code>OrganizationUserFileTagCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationUserFileTagCreate} obj Optional instance to populate.
     * @return {module:model/OrganizationUserFileTagCreate} The populated <code>OrganizationUserFileTagCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationUserFileTagCreate();

            if (data.hasOwnProperty('organization_user_file_id')) {
                obj['organization_user_file_id'] = ApiClient.convertToType(data['organization_user_file_id'], Object);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], {'String': Tags2AnyOfValue});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrganizationUserFileTagCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrganizationUserFileTagCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrganizationUserFileTagCreate.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

OrganizationUserFileTagCreate.RequiredProperties = ["organization_user_file_id", "tags"];

/**
 * @member {Object} organization_user_file_id
 */
OrganizationUserFileTagCreate.prototype['organization_user_file_id'] = undefined;

/**
 * @member {Object.<String, module:model/Tags2AnyOfValue>} tags
 */
OrganizationUserFileTagCreate.prototype['tags'] = undefined;






export default OrganizationUserFileTagCreate;

