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
import FileSize from './FileSize';
import FileStatisticsFileFormat from './FileStatisticsFileFormat';
import NumCharacters from './NumCharacters';
import NumEmbeddings from './NumEmbeddings';
import NumTokens from './NumTokens';

/**
 * The FileStatistics model module.
 * @module model/FileStatistics
 * @version 1.0.0
 */
class FileStatistics {
    /**
     * Constructs a new <code>FileStatistics</code>.
     * @alias module:model/FileStatistics
     * @param fileFormat {module:model/FileStatisticsFileFormat} 
     * @param fileSize {module:model/FileSize} 
     * @param numCharacters {module:model/NumCharacters} 
     * @param numTokens {module:model/NumTokens} 
     * @param numEmbeddings {module:model/NumEmbeddings} 
     */
    constructor(fileFormat, fileSize, numCharacters, numTokens, numEmbeddings) { 
        
        FileStatistics.initialize(this, fileFormat, fileSize, numCharacters, numTokens, numEmbeddings);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fileFormat, fileSize, numCharacters, numTokens, numEmbeddings) { 
        obj['file_format'] = fileFormat;
        obj['file_size'] = fileSize;
        obj['num_characters'] = numCharacters;
        obj['num_tokens'] = numTokens;
        obj['num_embeddings'] = numEmbeddings;
    }

    /**
     * Constructs a <code>FileStatistics</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileStatistics} obj Optional instance to populate.
     * @return {module:model/FileStatistics} The populated <code>FileStatistics</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileStatistics();

            if (data.hasOwnProperty('file_format')) {
                obj['file_format'] = FileStatisticsFileFormat.constructFromObject(data['file_format']);
            }
            if (data.hasOwnProperty('file_size')) {
                obj['file_size'] = FileSize.constructFromObject(data['file_size']);
            }
            if (data.hasOwnProperty('num_characters')) {
                obj['num_characters'] = NumCharacters.constructFromObject(data['num_characters']);
            }
            if (data.hasOwnProperty('num_tokens')) {
                obj['num_tokens'] = NumTokens.constructFromObject(data['num_tokens']);
            }
            if (data.hasOwnProperty('num_embeddings')) {
                obj['num_embeddings'] = NumEmbeddings.constructFromObject(data['num_embeddings']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FileStatistics</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FileStatistics</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FileStatistics.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `file_format`
        if (data['file_format']) { // data not null
          FileStatisticsFileFormat.validateJSON(data['file_format']);
        }
        // validate the optional field `file_size`
        if (data['file_size']) { // data not null
          FileSize.validateJSON(data['file_size']);
        }
        // validate the optional field `num_characters`
        if (data['num_characters']) { // data not null
          NumCharacters.validateJSON(data['num_characters']);
        }
        // validate the optional field `num_tokens`
        if (data['num_tokens']) { // data not null
          NumTokens.validateJSON(data['num_tokens']);
        }
        // validate the optional field `num_embeddings`
        if (data['num_embeddings']) { // data not null
          NumEmbeddings.validateJSON(data['num_embeddings']);
        }

        return true;
    }


}

FileStatistics.RequiredProperties = ["file_format", "file_size", "num_characters", "num_tokens", "num_embeddings"];

/**
 * @member {module:model/FileStatisticsFileFormat} file_format
 */
FileStatistics.prototype['file_format'] = undefined;

/**
 * @member {module:model/FileSize} file_size
 */
FileStatistics.prototype['file_size'] = undefined;

/**
 * @member {module:model/NumCharacters} num_characters
 */
FileStatistics.prototype['num_characters'] = undefined;

/**
 * @member {module:model/NumTokens} num_tokens
 */
FileStatistics.prototype['num_tokens'] = undefined;

/**
 * @member {module:model/NumEmbeddings} num_embeddings
 */
FileStatistics.prototype['num_embeddings'] = undefined;






export default FileStatistics;

