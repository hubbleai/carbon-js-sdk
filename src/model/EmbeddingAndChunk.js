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
import ChunkIndex from './ChunkIndex';
import Embedding from './Embedding';

/**
 * The EmbeddingAndChunk model module.
 * @module model/EmbeddingAndChunk
 * @version 1.0.0
 */
class EmbeddingAndChunk {
    /**
     * Constructs a new <code>EmbeddingAndChunk</code>.
     * @alias module:model/EmbeddingAndChunk
     * @param userFileId {Object} 
     * @param chunkIndex {module:model/ChunkIndex} 
     * @param sourceContent {Object} 
     * @param embedding {module:model/Embedding} 
     */
    constructor(userFileId, chunkIndex, sourceContent, embedding) { 
        
        EmbeddingAndChunk.initialize(this, userFileId, chunkIndex, sourceContent, embedding);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userFileId, chunkIndex, sourceContent, embedding) { 
        obj['user_file_id'] = userFileId;
        obj['chunk_index'] = chunkIndex;
        obj['source_content'] = sourceContent;
        obj['embedding'] = embedding;
    }

    /**
     * Constructs a <code>EmbeddingAndChunk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmbeddingAndChunk} obj Optional instance to populate.
     * @return {module:model/EmbeddingAndChunk} The populated <code>EmbeddingAndChunk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmbeddingAndChunk();

            if (data.hasOwnProperty('user_file_id')) {
                obj['user_file_id'] = ApiClient.convertToType(data['user_file_id'], Object);
            }
            if (data.hasOwnProperty('chunk_index')) {
                obj['chunk_index'] = ChunkIndex.constructFromObject(data['chunk_index']);
            }
            if (data.hasOwnProperty('source_content')) {
                obj['source_content'] = ApiClient.convertToType(data['source_content'], Object);
            }
            if (data.hasOwnProperty('embedding')) {
                obj['embedding'] = Embedding.constructFromObject(data['embedding']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmbeddingAndChunk</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmbeddingAndChunk</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EmbeddingAndChunk.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `chunk_index`
        if (data['chunk_index']) { // data not null
          ChunkIndex.validateJSON(data['chunk_index']);
        }
        // validate the optional field `embedding`
        if (data['embedding']) { // data not null
          Embedding.validateJSON(data['embedding']);
        }

        return true;
    }


}

EmbeddingAndChunk.RequiredProperties = ["user_file_id", "chunk_index", "source_content", "embedding"];

/**
 * @member {Object} user_file_id
 */
EmbeddingAndChunk.prototype['user_file_id'] = undefined;

/**
 * @member {module:model/ChunkIndex} chunk_index
 */
EmbeddingAndChunk.prototype['chunk_index'] = undefined;

/**
 * @member {Object} source_content
 */
EmbeddingAndChunk.prototype['source_content'] = undefined;

/**
 * @member {module:model/Embedding} embedding
 */
EmbeddingAndChunk.prototype['embedding'] = undefined;






export default EmbeddingAndChunk;

