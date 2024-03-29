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
import EmbeddingGenerators from './EmbeddingGenerators';
import Folder from './Folder';
import GenerateSparseVectors from './GenerateSparseVectors';
import PrependFilenameToChunks from './PrependFilenameToChunks';
import SkipEmbeddingGeneration from './SkipEmbeddingGeneration';
import Tags3 from './Tags3';

/**
 * The OutlookSyncInput model module.
 * @module model/OutlookSyncInput
 * @version 1.0.0
 */
class OutlookSyncInput {
    /**
     * Constructs a new <code>OutlookSyncInput</code>.
     * @alias module:model/OutlookSyncInput
     * @param filters {Object} 
     */
    constructor(filters) { 
        
        OutlookSyncInput.initialize(this, filters);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, filters) { 
        obj['filters'] = filters;
    }

    /**
     * Constructs a <code>OutlookSyncInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OutlookSyncInput} obj Optional instance to populate.
     * @return {module:model/OutlookSyncInput} The populated <code>OutlookSyncInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OutlookSyncInput();

            if (data.hasOwnProperty('folder')) {
                obj['folder'] = Folder.constructFromObject(data['folder']);
            }
            if (data.hasOwnProperty('filters')) {
                obj['filters'] = ApiClient.convertToType(data['filters'], Object);
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
                obj['embedding_model'] = ApiClient.convertToType(data['embedding_model'], EmbeddingGenerators);
            }
            if (data.hasOwnProperty('generate_sparse_vectors')) {
                obj['generate_sparse_vectors'] = GenerateSparseVectors.constructFromObject(data['generate_sparse_vectors']);
            }
            if (data.hasOwnProperty('prepend_filename_to_chunks')) {
                obj['prepend_filename_to_chunks'] = PrependFilenameToChunks.constructFromObject(data['prepend_filename_to_chunks']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OutlookSyncInput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OutlookSyncInput</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OutlookSyncInput.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `folder`
        if (data['folder']) { // data not null
          Folder.validateJSON(data['folder']);
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
        // validate the optional field `generate_sparse_vectors`
        if (data['generate_sparse_vectors']) { // data not null
          GenerateSparseVectors.validateJSON(data['generate_sparse_vectors']);
        }
        // validate the optional field `prepend_filename_to_chunks`
        if (data['prepend_filename_to_chunks']) { // data not null
          PrependFilenameToChunks.validateJSON(data['prepend_filename_to_chunks']);
        }

        return true;
    }


}

OutlookSyncInput.RequiredProperties = ["filters"];

/**
 * @member {module:model/Folder} folder
 */
OutlookSyncInput.prototype['folder'] = undefined;

/**
 * @member {Object} filters
 */
OutlookSyncInput.prototype['filters'] = undefined;

/**
 * @member {module:model/Tags3} tags
 */
OutlookSyncInput.prototype['tags'] = undefined;

/**
 * @member {module:model/ChunkSize1} chunk_size
 */
OutlookSyncInput.prototype['chunk_size'] = undefined;

/**
 * @member {module:model/ChunkOverlap1} chunk_overlap
 */
OutlookSyncInput.prototype['chunk_overlap'] = undefined;

/**
 * @member {module:model/SkipEmbeddingGeneration} skip_embedding_generation
 */
OutlookSyncInput.prototype['skip_embedding_generation'] = undefined;

/**
 * @member {module:model/EmbeddingGenerators} embedding_model
 */
OutlookSyncInput.prototype['embedding_model'] = undefined;

/**
 * @member {module:model/GenerateSparseVectors} generate_sparse_vectors
 */
OutlookSyncInput.prototype['generate_sparse_vectors'] = undefined;

/**
 * @member {module:model/PrependFilenameToChunks} prepend_filename_to_chunks
 */
OutlookSyncInput.prototype['prepend_filename_to_chunks'] = undefined;






export default OutlookSyncInput;

