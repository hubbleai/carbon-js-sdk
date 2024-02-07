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
import ChunkOverlap1 from './ChunkOverlap1';
import ChunkSize1 from './ChunkSize1';
import ConfluenceSubdomain from './ConfluenceSubdomain';
import DataSourceType from './DataSourceType';
import FreshDeskConnectRequestEmbeddingModel from './FreshDeskConnectRequestEmbeddingModel';
import GenerateSparseVectors from './GenerateSparseVectors';
import MaxItemsPerChunk from './MaxItemsPerChunk';
import MicrosoftTenant from './MicrosoftTenant';
import PrependFilenameToChunks from './PrependFilenameToChunks';
import Scope from './Scope';
import SharepointSiteName from './SharepointSiteName';
import SkipEmbeddingGeneration from './SkipEmbeddingGeneration';
import Tags3 from './Tags3';
import ZendeskSubdomain from './ZendeskSubdomain';

/**
 * The OAuthURLRequest model module.
 * @module model/OAuthURLRequest
 * @version 1.0.0
 */
class OAuthURLRequest {
    /**
     * Constructs a new <code>OAuthURLRequest</code>.
     * @alias module:model/OAuthURLRequest
     * @param service {module:model/DataSourceType} 
     */
    constructor(service) { 
        
        OAuthURLRequest.initialize(this, service);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, service) { 
        obj['service'] = service;
    }

    /**
     * Constructs a <code>OAuthURLRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OAuthURLRequest} obj Optional instance to populate.
     * @return {module:model/OAuthURLRequest} The populated <code>OAuthURLRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OAuthURLRequest();

            if (data.hasOwnProperty('scope')) {
                obj['scope'] = Scope.constructFromObject(data['scope']);
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = DataSourceType.constructFromObject(data['service']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = Tags3.constructFromObject(data['tags']);
            }
            if (data.hasOwnProperty('chunk_size')) {
                obj['chunk_size'] = ChunkSize1.constructFromObject(data['chunk_size']);
            }
            if (data.hasOwnProperty('chunk_overlap')) {
                obj['chunk_overlap'] = ChunkOverlap1.constructFromObject(data['chunk_overlap']);
            }
            if (data.hasOwnProperty('skip_embedding_generation')) {
                obj['skip_embedding_generation'] = SkipEmbeddingGeneration.constructFromObject(data['skip_embedding_generation']);
            }
            if (data.hasOwnProperty('embedding_model')) {
                obj['embedding_model'] = FreshDeskConnectRequestEmbeddingModel.constructFromObject(data['embedding_model']);
            }
            if (data.hasOwnProperty('zendesk_subdomain')) {
                obj['zendesk_subdomain'] = ZendeskSubdomain.constructFromObject(data['zendesk_subdomain']);
            }
            if (data.hasOwnProperty('microsoft_tenant')) {
                obj['microsoft_tenant'] = MicrosoftTenant.constructFromObject(data['microsoft_tenant']);
            }
            if (data.hasOwnProperty('sharepoint_site_name')) {
                obj['sharepoint_site_name'] = SharepointSiteName.constructFromObject(data['sharepoint_site_name']);
            }
            if (data.hasOwnProperty('confluence_subdomain')) {
                obj['confluence_subdomain'] = ConfluenceSubdomain.constructFromObject(data['confluence_subdomain']);
            }
            if (data.hasOwnProperty('generate_sparse_vectors')) {
                obj['generate_sparse_vectors'] = GenerateSparseVectors.constructFromObject(data['generate_sparse_vectors']);
            }
            if (data.hasOwnProperty('prepend_filename_to_chunks')) {
                obj['prepend_filename_to_chunks'] = PrependFilenameToChunks.constructFromObject(data['prepend_filename_to_chunks']);
            }
            if (data.hasOwnProperty('max_items_per_chunk')) {
                obj['max_items_per_chunk'] = MaxItemsPerChunk.constructFromObject(data['max_items_per_chunk']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OAuthURLRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OAuthURLRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OAuthURLRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `scope`
        if (data['scope']) { // data not null
          Scope.validateJSON(data['scope']);
        }
        // validate the optional field `tags`
        if (data['tags']) { // data not null
          Tags3.validateJSON(data['tags']);
        }
        // validate the optional field `chunk_size`
        if (data['chunk_size']) { // data not null
          ChunkSize1.validateJSON(data['chunk_size']);
        }
        // validate the optional field `chunk_overlap`
        if (data['chunk_overlap']) { // data not null
          ChunkOverlap1.validateJSON(data['chunk_overlap']);
        }
        // validate the optional field `skip_embedding_generation`
        if (data['skip_embedding_generation']) { // data not null
          SkipEmbeddingGeneration.validateJSON(data['skip_embedding_generation']);
        }
        // validate the optional field `embedding_model`
        if (data['embedding_model']) { // data not null
          FreshDeskConnectRequestEmbeddingModel.validateJSON(data['embedding_model']);
        }
        // validate the optional field `zendesk_subdomain`
        if (data['zendesk_subdomain']) { // data not null
          ZendeskSubdomain.validateJSON(data['zendesk_subdomain']);
        }
        // validate the optional field `microsoft_tenant`
        if (data['microsoft_tenant']) { // data not null
          MicrosoftTenant.validateJSON(data['microsoft_tenant']);
        }
        // validate the optional field `sharepoint_site_name`
        if (data['sharepoint_site_name']) { // data not null
          SharepointSiteName.validateJSON(data['sharepoint_site_name']);
        }
        // validate the optional field `confluence_subdomain`
        if (data['confluence_subdomain']) { // data not null
          ConfluenceSubdomain.validateJSON(data['confluence_subdomain']);
        }
        // validate the optional field `generate_sparse_vectors`
        if (data['generate_sparse_vectors']) { // data not null
          GenerateSparseVectors.validateJSON(data['generate_sparse_vectors']);
        }
        // validate the optional field `prepend_filename_to_chunks`
        if (data['prepend_filename_to_chunks']) { // data not null
          PrependFilenameToChunks.validateJSON(data['prepend_filename_to_chunks']);
        }
        // validate the optional field `max_items_per_chunk`
        if (data['max_items_per_chunk']) { // data not null
          MaxItemsPerChunk.validateJSON(data['max_items_per_chunk']);
        }

        return true;
    }


}

OAuthURLRequest.RequiredProperties = ["service"];

/**
 * @member {module:model/Scope} scope
 */
OAuthURLRequest.prototype['scope'] = undefined;

/**
 * @member {module:model/DataSourceType} service
 */
OAuthURLRequest.prototype['service'] = undefined;

/**
 * @member {module:model/Tags3} tags
 */
OAuthURLRequest.prototype['tags'] = undefined;

/**
 * @member {module:model/ChunkSize1} chunk_size
 */
OAuthURLRequest.prototype['chunk_size'] = undefined;

/**
 * @member {module:model/ChunkOverlap1} chunk_overlap
 */
OAuthURLRequest.prototype['chunk_overlap'] = undefined;

/**
 * @member {module:model/SkipEmbeddingGeneration} skip_embedding_generation
 */
OAuthURLRequest.prototype['skip_embedding_generation'] = undefined;

/**
 * @member {module:model/FreshDeskConnectRequestEmbeddingModel} embedding_model
 */
OAuthURLRequest.prototype['embedding_model'] = undefined;

/**
 * @member {module:model/ZendeskSubdomain} zendesk_subdomain
 */
OAuthURLRequest.prototype['zendesk_subdomain'] = undefined;

/**
 * @member {module:model/MicrosoftTenant} microsoft_tenant
 */
OAuthURLRequest.prototype['microsoft_tenant'] = undefined;

/**
 * @member {module:model/SharepointSiteName} sharepoint_site_name
 */
OAuthURLRequest.prototype['sharepoint_site_name'] = undefined;

/**
 * @member {module:model/ConfluenceSubdomain} confluence_subdomain
 */
OAuthURLRequest.prototype['confluence_subdomain'] = undefined;

/**
 * @member {module:model/GenerateSparseVectors} generate_sparse_vectors
 */
OAuthURLRequest.prototype['generate_sparse_vectors'] = undefined;

/**
 * @member {module:model/PrependFilenameToChunks} prepend_filename_to_chunks
 */
OAuthURLRequest.prototype['prepend_filename_to_chunks'] = undefined;

/**
 * @member {module:model/MaxItemsPerChunk} max_items_per_chunk
 */
OAuthURLRequest.prototype['max_items_per_chunk'] = undefined;






export default OAuthURLRequest;
