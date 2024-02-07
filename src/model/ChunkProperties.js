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
import MaxItemsPerChunk from './MaxItemsPerChunk';

/**
 * The ChunkProperties model module.
 * @module model/ChunkProperties
 * @version 1.0.0
 */
class ChunkProperties {
    /**
     * Constructs a new <code>ChunkProperties</code>.
     * @alias module:model/ChunkProperties
     * @param setPageAsBoundary {Object} 
     * @param prependFilenameToChunks {Object} 
     * @param maxItemsPerChunk {module:model/MaxItemsPerChunk} 
     */
    constructor(setPageAsBoundary, prependFilenameToChunks, maxItemsPerChunk) { 
        
        ChunkProperties.initialize(this, setPageAsBoundary, prependFilenameToChunks, maxItemsPerChunk);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, setPageAsBoundary, prependFilenameToChunks, maxItemsPerChunk) { 
        obj['set_page_as_boundary'] = setPageAsBoundary;
        obj['prepend_filename_to_chunks'] = prependFilenameToChunks;
        obj['max_items_per_chunk'] = maxItemsPerChunk;
    }

    /**
     * Constructs a <code>ChunkProperties</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChunkProperties} obj Optional instance to populate.
     * @return {module:model/ChunkProperties} The populated <code>ChunkProperties</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChunkProperties();

            if (data.hasOwnProperty('set_page_as_boundary')) {
                obj['set_page_as_boundary'] = ApiClient.convertToType(data['set_page_as_boundary'], Object);
            }
            if (data.hasOwnProperty('prepend_filename_to_chunks')) {
                obj['prepend_filename_to_chunks'] = ApiClient.convertToType(data['prepend_filename_to_chunks'], Object);
            }
            if (data.hasOwnProperty('max_items_per_chunk')) {
                obj['max_items_per_chunk'] = MaxItemsPerChunk.constructFromObject(data['max_items_per_chunk']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChunkProperties</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChunkProperties</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ChunkProperties.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `max_items_per_chunk`
        if (data['max_items_per_chunk']) { // data not null
          MaxItemsPerChunk.validateJSON(data['max_items_per_chunk']);
        }

        return true;
    }


}

ChunkProperties.RequiredProperties = ["set_page_as_boundary", "prepend_filename_to_chunks", "max_items_per_chunk"];

/**
 * @member {Object} set_page_as_boundary
 */
ChunkProperties.prototype['set_page_as_boundary'] = undefined;

/**
 * @member {Object} prepend_filename_to_chunks
 */
ChunkProperties.prototype['prepend_filename_to_chunks'] = undefined;

/**
 * @member {module:model/MaxItemsPerChunk} max_items_per_chunk
 */
ChunkProperties.prototype['max_items_per_chunk'] = undefined;






export default ChunkProperties;
