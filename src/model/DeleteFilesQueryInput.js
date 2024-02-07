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
import FileIds from './FileIds';
import SyncStatuses from './SyncStatuses';

/**
 * The DeleteFilesQueryInput model module.
 * @module model/DeleteFilesQueryInput
 * @version 1.0.0
 */
class DeleteFilesQueryInput {
    /**
     * Constructs a new <code>DeleteFilesQueryInput</code>.
     * @alias module:model/DeleteFilesQueryInput
     */
    constructor() { 
        
        DeleteFilesQueryInput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteFilesQueryInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteFilesQueryInput} obj Optional instance to populate.
     * @return {module:model/DeleteFilesQueryInput} The populated <code>DeleteFilesQueryInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteFilesQueryInput();

            if (data.hasOwnProperty('file_ids')) {
                obj['file_ids'] = FileIds.constructFromObject(data['file_ids']);
            }
            if (data.hasOwnProperty('sync_statuses')) {
                obj['sync_statuses'] = SyncStatuses.constructFromObject(data['sync_statuses']);
            }
            if (data.hasOwnProperty('delete_non_synced_only')) {
                obj['delete_non_synced_only'] = ApiClient.convertToType(data['delete_non_synced_only'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteFilesQueryInput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteFilesQueryInput</code>.
     */
    static validateJSON(data) {
        // validate the optional field `file_ids`
        if (data['file_ids']) { // data not null
          FileIds.validateJSON(data['file_ids']);
        }
        // validate the optional field `sync_statuses`
        if (data['sync_statuses']) { // data not null
          SyncStatuses.validateJSON(data['sync_statuses']);
        }

        return true;
    }


}



/**
 * @member {module:model/FileIds} file_ids
 */
DeleteFilesQueryInput.prototype['file_ids'] = undefined;

/**
 * @member {module:model/SyncStatuses} sync_statuses
 */
DeleteFilesQueryInput.prototype['sync_statuses'] = undefined;

/**
 * @member {Object} delete_non_synced_only
 */
DeleteFilesQueryInput.prototype['delete_non_synced_only'] = undefined;






export default DeleteFilesQueryInput;
