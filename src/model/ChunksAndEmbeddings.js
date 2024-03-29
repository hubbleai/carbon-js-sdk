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
import ChunkNumber from './ChunkNumber';

/**
 * The ChunksAndEmbeddings model module.
 * @module model/ChunksAndEmbeddings
 * @version 1.0.0
 */
class ChunksAndEmbeddings {
    /**
     * Constructs a new <code>ChunksAndEmbeddings</code>.
     * @alias module:model/ChunksAndEmbeddings
     * @param chunkNumber {module:model/ChunkNumber} 
     * @param chunk {Object} 
     * @param embedding {Object} 
     */
    constructor(chunkNumber, chunk, embedding) { 
        
        ChunksAndEmbeddings.initialize(this, chunkNumber, chunk, embedding);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, chunkNumber, chunk, embedding) { 
        obj['chunk_number'] = chunkNumber;
        obj['chunk'] = chunk;
        obj['embedding'] = embedding;
    }

    /**
     * Constructs a <code>ChunksAndEmbeddings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChunksAndEmbeddings} obj Optional instance to populate.
     * @return {module:model/ChunksAndEmbeddings} The populated <code>ChunksAndEmbeddings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChunksAndEmbeddings();

            if (data.hasOwnProperty('chunk_number')) {
                obj['chunk_number'] = ChunkNumber.constructFromObject(data['chunk_number']);
            }
            if (data.hasOwnProperty('chunk')) {
                obj['chunk'] = ApiClient.convertToType(data['chunk'], Object);
            }
            if (data.hasOwnProperty('embedding')) {
                obj['embedding'] = ApiClient.convertToType(data['embedding'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChunksAndEmbeddings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChunksAndEmbeddings</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ChunksAndEmbeddings.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `chunk_number`
        if (data['chunk_number']) { // data not null
          ChunkNumber.validateJSON(data['chunk_number']);
        }

        return true;
    }


}

ChunksAndEmbeddings.RequiredProperties = ["chunk_number", "chunk", "embedding"];

/**
 * @member {module:model/ChunkNumber} chunk_number
 */
ChunksAndEmbeddings.prototype['chunk_number'] = undefined;

/**
 * @member {Object} chunk
 */
ChunksAndEmbeddings.prototype['chunk'] = undefined;

/**
 * @member {Object} embedding
 */
ChunksAndEmbeddings.prototype['embedding'] = undefined;






export default ChunksAndEmbeddings;

