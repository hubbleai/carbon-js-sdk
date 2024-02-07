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
import DataSourceExternalId from './DataSourceExternalId';
import DataSourceLastSyncActions from './DataSourceLastSyncActions';
import DataSourceSyncStatuses from './DataSourceSyncStatuses';
import DataSourceType from './DataSourceType';
import SourceItemsSyncedAt from './SourceItemsSyncedAt';

/**
 * The OrganizationUserDataSourceAPI model module.
 * @module model/OrganizationUserDataSourceAPI
 * @version 1.0.0
 */
class OrganizationUserDataSourceAPI {
    /**
     * Constructs a new <code>OrganizationUserDataSourceAPI</code>.
     * @alias module:model/OrganizationUserDataSourceAPI
     * @param id {Object} 
     * @param dataSourceExternalId {module:model/DataSourceExternalId} 
     * @param dataSourceType {module:model/DataSourceType} 
     * @param syncStatus {module:model/DataSourceSyncStatuses} 
     * @param sourceItemsSyncedAt {module:model/SourceItemsSyncedAt} 
     * @param organizationUserId {Object} 
     * @param organizationId {Object} 
     * @param organizationSuppliedUserId {Object} 
     * @param revokedAccess {Object} 
     * @param lastSyncedAt {Object} 
     * @param lastSyncAction {module:model/DataSourceLastSyncActions} 
     * @param createdAt {Object} 
     * @param updatedAt {Object} 
     */
    constructor(id, dataSourceExternalId, dataSourceType, syncStatus, sourceItemsSyncedAt, organizationUserId, organizationId, organizationSuppliedUserId, revokedAccess, lastSyncedAt, lastSyncAction, createdAt, updatedAt) { 
        
        OrganizationUserDataSourceAPI.initialize(this, id, dataSourceExternalId, dataSourceType, syncStatus, sourceItemsSyncedAt, organizationUserId, organizationId, organizationSuppliedUserId, revokedAccess, lastSyncedAt, lastSyncAction, createdAt, updatedAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, dataSourceExternalId, dataSourceType, syncStatus, sourceItemsSyncedAt, organizationUserId, organizationId, organizationSuppliedUserId, revokedAccess, lastSyncedAt, lastSyncAction, createdAt, updatedAt) { 
        obj['id'] = id;
        obj['data_source_external_id'] = dataSourceExternalId;
        obj['data_source_type'] = dataSourceType;
        obj['sync_status'] = syncStatus;
        obj['source_items_synced_at'] = sourceItemsSyncedAt;
        obj['organization_user_id'] = organizationUserId;
        obj['organization_id'] = organizationId;
        obj['organization_supplied_user_id'] = organizationSuppliedUserId;
        obj['revoked_access'] = revokedAccess;
        obj['last_synced_at'] = lastSyncedAt;
        obj['last_sync_action'] = lastSyncAction;
        obj['created_at'] = createdAt;
        obj['updated_at'] = updatedAt;
    }

    /**
     * Constructs a <code>OrganizationUserDataSourceAPI</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrganizationUserDataSourceAPI} obj Optional instance to populate.
     * @return {module:model/OrganizationUserDataSourceAPI} The populated <code>OrganizationUserDataSourceAPI</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrganizationUserDataSourceAPI();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], Object);
            }
            if (data.hasOwnProperty('data_source_external_id')) {
                obj['data_source_external_id'] = DataSourceExternalId.constructFromObject(data['data_source_external_id']);
            }
            if (data.hasOwnProperty('data_source_type')) {
                obj['data_source_type'] = DataSourceType.constructFromObject(data['data_source_type']);
            }
            if (data.hasOwnProperty('sync_status')) {
                obj['sync_status'] = DataSourceSyncStatuses.constructFromObject(data['sync_status']);
            }
            if (data.hasOwnProperty('source_items_synced_at')) {
                obj['source_items_synced_at'] = SourceItemsSyncedAt.constructFromObject(data['source_items_synced_at']);
            }
            if (data.hasOwnProperty('organization_user_id')) {
                obj['organization_user_id'] = ApiClient.convertToType(data['organization_user_id'], Object);
            }
            if (data.hasOwnProperty('organization_id')) {
                obj['organization_id'] = ApiClient.convertToType(data['organization_id'], Object);
            }
            if (data.hasOwnProperty('organization_supplied_user_id')) {
                obj['organization_supplied_user_id'] = ApiClient.convertToType(data['organization_supplied_user_id'], Object);
            }
            if (data.hasOwnProperty('revoked_access')) {
                obj['revoked_access'] = ApiClient.convertToType(data['revoked_access'], Object);
            }
            if (data.hasOwnProperty('last_synced_at')) {
                obj['last_synced_at'] = ApiClient.convertToType(data['last_synced_at'], Object);
            }
            if (data.hasOwnProperty('last_sync_action')) {
                obj['last_sync_action'] = DataSourceLastSyncActions.constructFromObject(data['last_sync_action']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], Object);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrganizationUserDataSourceAPI</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrganizationUserDataSourceAPI</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OrganizationUserDataSourceAPI.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `data_source_external_id`
        if (data['data_source_external_id']) { // data not null
          DataSourceExternalId.validateJSON(data['data_source_external_id']);
        }
        // validate the optional field `source_items_synced_at`
        if (data['source_items_synced_at']) { // data not null
          SourceItemsSyncedAt.validateJSON(data['source_items_synced_at']);
        }

        return true;
    }


}

OrganizationUserDataSourceAPI.RequiredProperties = ["id", "data_source_external_id", "data_source_type", "sync_status", "source_items_synced_at", "organization_user_id", "organization_id", "organization_supplied_user_id", "revoked_access", "last_synced_at", "last_sync_action", "created_at", "updated_at"];

/**
 * @member {Object} id
 */
OrganizationUserDataSourceAPI.prototype['id'] = undefined;

/**
 * @member {module:model/DataSourceExternalId} data_source_external_id
 */
OrganizationUserDataSourceAPI.prototype['data_source_external_id'] = undefined;

/**
 * @member {module:model/DataSourceType} data_source_type
 */
OrganizationUserDataSourceAPI.prototype['data_source_type'] = undefined;

/**
 * @member {module:model/DataSourceSyncStatuses} sync_status
 */
OrganizationUserDataSourceAPI.prototype['sync_status'] = undefined;

/**
 * @member {module:model/SourceItemsSyncedAt} source_items_synced_at
 */
OrganizationUserDataSourceAPI.prototype['source_items_synced_at'] = undefined;

/**
 * @member {Object} organization_user_id
 */
OrganizationUserDataSourceAPI.prototype['organization_user_id'] = undefined;

/**
 * @member {Object} organization_id
 */
OrganizationUserDataSourceAPI.prototype['organization_id'] = undefined;

/**
 * @member {Object} organization_supplied_user_id
 */
OrganizationUserDataSourceAPI.prototype['organization_supplied_user_id'] = undefined;

/**
 * @member {Object} revoked_access
 */
OrganizationUserDataSourceAPI.prototype['revoked_access'] = undefined;

/**
 * @member {Object} last_synced_at
 */
OrganizationUserDataSourceAPI.prototype['last_synced_at'] = undefined;

/**
 * @member {module:model/DataSourceLastSyncActions} last_sync_action
 */
OrganizationUserDataSourceAPI.prototype['last_sync_action'] = undefined;

/**
 * @member {Object} created_at
 */
OrganizationUserDataSourceAPI.prototype['created_at'] = undefined;

/**
 * @member {Object} updated_at
 */
OrganizationUserDataSourceAPI.prototype['updated_at'] = undefined;






export default OrganizationUserDataSourceAPI;
