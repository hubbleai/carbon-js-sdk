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


import ApiClient from "../ApiClient";
import DeleteFilesQueryInput from '../model/DeleteFilesQueryInput';
import GenericSuccessResponse from '../model/GenericSuccessResponse';
import HTTPValidationError from '../model/HTTPValidationError';
import OrganizationUserFileTagCreate from '../model/OrganizationUserFileTagCreate';
import OrganizationUserFileTagsRemove from '../model/OrganizationUserFileTagsRemove';
import OrganizationUserFilesToSyncQueryInput from '../model/OrganizationUserFilesToSyncQueryInput';
import PresignedURLResponse from '../model/PresignedURLResponse';
import RawTextInput from '../model/RawTextInput';
import ResyncFileQueryInput from '../model/ResyncFileQueryInput';
import TextEmbeddingGenerators from '../model/TextEmbeddingGenerators';
import UploadFileFromUrlInput from '../model/UploadFileFromUrlInput';
import UserFile from '../model/UserFile';
import UserFilesV2 from '../model/UserFilesV2';

/**
* Files service.
* @module api/FilesApi
* @version 1.0.0
*/
export default class FilesApi {

    /**
    * Constructs a new FilesApi. 
    * @alias module:api/FilesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createFileTagsCreateUserFileTagsPost operation.
     * @callback module:api/FilesApi~createFileTagsCreateUserFileTagsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserFile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create File Tags
     * A tag is a key-value pair that can be added to a file. This pair can then be used for searches (e.g. embedding searches) in order to narrow down the scope of the search. A file can have any number of tags. The following are reserved keys that cannot be used: - db_embedding_id - organization_id - user_id - organization_user_file_id  Carbon currently supports two data types for tag values - `string` and `list<string>`. Keys can only be `string`. If values other than `string` and `list<string>` are used, they're automatically converted to strings (e.g. 4 will become \"4\").
     * @param {String} authorization 
     * @param {module:model/OrganizationUserFileTagCreate} organizationUserFileTagCreate 
     * @param {Object} opts Optional parameters
     * @param {String} [customerId] 
     * @param {module:api/FilesApi~createFileTagsCreateUserFileTagsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserFile}
     */
    createFileTagsCreateUserFileTagsPost(authorization, organizationUserFileTagCreate, opts, callback) {
      opts = opts || {};
      let postBody = organizationUserFileTagCreate;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling createFileTagsCreateUserFileTagsPost");
      }
      // verify the required parameter 'organizationUserFileTagCreate' is set
      if (organizationUserFileTagCreate === undefined || organizationUserFileTagCreate === null) {
        throw new Error("Missing the required parameter 'organizationUserFileTagCreate' when calling createFileTagsCreateUserFileTagsPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization,
        'customer-id': opts['customerId']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserFile;
      return this.apiClient.callApi(
        '/create_user_file_tags', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createRawTextUploadTextPost operation.
     * @callback module:api/FilesApi~createRawTextUploadTextPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserFile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Raw Text
     * Carbon supports multiple models for use in generating embeddings for files. For images, we support Vertex AI's multimodal model; for text, we support OpenAI's `text-embedding-ada-002` and Cohere's embed-multilingual-v3.0. The model can be specified via the `embedding_model` parameter (in the POST body for `/embeddings`, and a query  parameter in `/uploadfile`). If no model is supplied, the `text-embedding-ada-002` is used by default. When performing embedding queries, embeddings from files that used the specified model will be considered in the query. For example, if files A and B have embeddings generated with `OPENAI`, and files C and D have embeddings generated with `COHERE_MULTILINGUAL_V3`, then by default, queries will only consider files A and B. If `COHERE_MULTILINGUAL_V3` is specified as the `embedding_model` in `/embeddings`, then only files C and D will be considered. Make sure that the set of all files you want considered for a query have embeddings generated via the same model. For now, **do not** set `VERTEX_MULTIMODAL` as an `embedding_model`. This model is used automatically by Carbon when it detects an image file.
     * @param {String} authorization 
     * @param {module:model/RawTextInput} rawTextInput 
     * @param {Object} opts Optional parameters
     * @param {String} [customerId] 
     * @param {module:api/FilesApi~createRawTextUploadTextPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserFile}
     */
    createRawTextUploadTextPost(authorization, rawTextInput, opts, callback) {
      opts = opts || {};
      let postBody = rawTextInput;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling createRawTextUploadTextPost");
      }
      // verify the required parameter 'rawTextInput' is set
      if (rawTextInput === undefined || rawTextInput === null) {
        throw new Error("Missing the required parameter 'rawTextInput' when calling createRawTextUploadTextPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization,
        'customer-id': opts['customerId']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserFile;
      return this.apiClient.callApi(
        '/upload_text', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createUploadFileFromUrlUploadFileFromUrlPost operation.
     * @callback module:api/FilesApi~createUploadFileFromUrlUploadFileFromUrlPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserFile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Upload File From Url
     * @param {String} authorization 
     * @param {module:model/UploadFileFromUrlInput} uploadFileFromUrlInput 
     * @param {Object} opts Optional parameters
     * @param {String} [customerId] 
     * @param {module:api/FilesApi~createUploadFileFromUrlUploadFileFromUrlPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserFile}
     */
    createUploadFileFromUrlUploadFileFromUrlPost(authorization, uploadFileFromUrlInput, opts, callback) {
      opts = opts || {};
      let postBody = uploadFileFromUrlInput;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling createUploadFileFromUrlUploadFileFromUrlPost");
      }
      // verify the required parameter 'uploadFileFromUrlInput' is set
      if (uploadFileFromUrlInput === undefined || uploadFileFromUrlInput === null) {
        throw new Error("Missing the required parameter 'uploadFileFromUrlInput' when calling createUploadFileFromUrlUploadFileFromUrlPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization,
        'customer-id': opts['customerId']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserFile;
      return this.apiClient.callApi(
        '/upload_file_from_url', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createUploadFileUploadfilePost operation.
     * @callback module:api/FilesApi~createUploadFileUploadfilePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserFile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Upload File
     * This endpoint is used to directly upload local files to Carbon. The `POST` request should be a multipart form request. Note that the `set_page_as_boundary` query parameter is applicable only to PDFs for now. When this value is set, PDF chunks are at most one page long. Additional information can be retrieved for each chunk, however, namely the coordinates of the bounding box around the chunk (this can be used for things like text highlighting). Following is a description of all possible query parameters: - `chunk_size`: the chunk size (in tokens) applied when splitting the document - `chunk_overlap`: the chunk overlap (in tokens) applied when splitting the document - `skip_embedding_generation`: whether or not to skip the generation of chunks and embeddings - `set_page_as_boundary`: described above - `embedding_model`: the model used to generate embeddings for the document chunks - `use_ocr`: whether or not to use OCR as a preprocessing step prior to generating chunks (only valid for PDFs currently) - `generate_sparse_vectors`: whether or not to generate sparse vectors for the file. Required for hybrid search. - `prepend_filename_to_chunks`: whether or not to prepend the filename to the chunk text   Carbon supports multiple models for use in generating embeddings for files. For images, we support Vertex AI's multimodal model; for text, we support OpenAI's `text-embedding-ada-002` and Cohere's embed-multilingual-v3.0. The model can be specified via the `embedding_model` parameter (in the POST body for `/embeddings`, and a query  parameter in `/uploadfile`). If no model is supplied, the `text-embedding-ada-002` is used by default. When performing embedding queries, embeddings from files that used the specified model will be considered in the query. For example, if files A and B have embeddings generated with `OPENAI`, and files C and D have embeddings generated with `COHERE_MULTILINGUAL_V3`, then by default, queries will only consider files A and B. If `COHERE_MULTILINGUAL_V3` is specified as the `embedding_model` in `/embeddings`, then only files C and D will be considered. Make sure that the set of all files you want considered for a query have embeddings generated via the same model. For now, **do not** set `VERTEX_MULTIMODAL` as an `embedding_model`. This model is used automatically by Carbon when it detects an image file.
     * @param {String} authorization 
     * @param {Object} file 
     * @param {Object} opts Optional parameters
     * @param {Number} [chunkSize] Chunk size in tiktoken tokens to be used when processing file.
     * @param {Number} [chunkOverlap] Chunk overlap in tiktoken tokens to be used when processing file.
     * @param {Boolean} [skipEmbeddingGeneration = false)] Flag to control whether or not embeddings should be generated and stored             when processing file.
     * @param {Boolean} [setPageAsBoundary = false)] Flag to control whether or not to set the a page's worth of content as the maximum             amount of content that can appear in a chunk. Only valid for PDFs. See description route description for             more information.
     * @param {module:model/TextEmbeddingGenerators} [embeddingModel] Embedding model that will be used to embed file chunks.
     * @param {Boolean} [useOcr = false)] Whether or not to use OCR when processing files. Only valid for PDFs. Useful for documents with             tables, images, and/or scanned text.
     * @param {Boolean} [generateSparseVectors = false)] Whether or not to generate sparse vectors for the file. This is *required* for the file to be a             candidate for hybrid search.
     * @param {Boolean} [prependFilenameToChunks = false)] Whether or not to prepend the file's name to chunks.
     * @param {Number} [maxItemsPerChunk] Number of objects per chunk. For json files only.
     * @param {String} [customerId] 
     * @param {module:api/FilesApi~createUploadFileUploadfilePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserFile}
     */
    createUploadFileUploadfilePost(authorization, file, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling createUploadFileUploadfilePost");
      }
      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling createUploadFileUploadfilePost");
      }

      let pathParams = {
      };
      let queryParams = {
        'chunk_size': opts['chunkSize'],
        'chunk_overlap': opts['chunkOverlap'],
        'skip_embedding_generation': opts['skipEmbeddingGeneration'],
        'set_page_as_boundary': opts['setPageAsBoundary'],
        'embedding_model': opts['embeddingModel'],
        'use_ocr': opts['useOcr'],
        'generate_sparse_vectors': opts['generateSparseVectors'],
        'prepend_filename_to_chunks': opts['prependFilenameToChunks'],
        'max_items_per_chunk': opts['maxItemsPerChunk']
      };
      let headerParams = {
        'authorization': authorization,
        'customer-id': opts['customerId']
      };
      let formParams = {
        'file': file
      };

      let authNames = [];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = UserFile;
      return this.apiClient.callApi(
        '/uploadfile', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFileEndpointDeletefileFileIdDelete operation.
     * @callback module:api/FilesApi~deleteFileEndpointDeletefileFileIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GenericSuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete File Endpoint
     * @param {Number} fileId 
     * @param {String} authorization 
     * @param {Object} opts Optional parameters
     * @param {String} [customerId] 
     * @param {module:api/FilesApi~deleteFileEndpointDeletefileFileIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GenericSuccessResponse}
     */
    deleteFileEndpointDeletefileFileIdDelete(fileId, authorization, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteFileEndpointDeletefileFileIdDelete");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling deleteFileEndpointDeletefileFileIdDelete");
      }

      let pathParams = {
        'file_id': fileId
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization,
        'customer-id': opts['customerId']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GenericSuccessResponse;
      return this.apiClient.callApi(
        '/deletefile/{file_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFileTagsDeleteUserFileTagsPost operation.
     * @callback module:api/FilesApi~deleteFileTagsDeleteUserFileTagsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserFile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete File Tags
     * @param {String} authorization 
     * @param {module:model/OrganizationUserFileTagsRemove} organizationUserFileTagsRemove 
     * @param {Object} opts Optional parameters
     * @param {String} [customerId] 
     * @param {module:api/FilesApi~deleteFileTagsDeleteUserFileTagsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserFile}
     */
    deleteFileTagsDeleteUserFileTagsPost(authorization, organizationUserFileTagsRemove, opts, callback) {
      opts = opts || {};
      let postBody = organizationUserFileTagsRemove;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling deleteFileTagsDeleteUserFileTagsPost");
      }
      // verify the required parameter 'organizationUserFileTagsRemove' is set
      if (organizationUserFileTagsRemove === undefined || organizationUserFileTagsRemove === null) {
        throw new Error("Missing the required parameter 'organizationUserFileTagsRemove' when calling deleteFileTagsDeleteUserFileTagsPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization,
        'customer-id': opts['customerId']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserFile;
      return this.apiClient.callApi(
        '/delete_user_file_tags', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFilesEndpointDeleteFilesPost operation.
     * @callback module:api/FilesApi~deleteFilesEndpointDeleteFilesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GenericSuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Files Endpoint
     * @param {String} authorization 
     * @param {module:model/DeleteFilesQueryInput} deleteFilesQueryInput 
     * @param {Object} opts Optional parameters
     * @param {String} [customerId] 
     * @param {module:api/FilesApi~deleteFilesEndpointDeleteFilesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GenericSuccessResponse}
     */
    deleteFilesEndpointDeleteFilesPost(authorization, deleteFilesQueryInput, opts, callback) {
      opts = opts || {};
      let postBody = deleteFilesQueryInput;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling deleteFilesEndpointDeleteFilesPost");
      }
      // verify the required parameter 'deleteFilesQueryInput' is set
      if (deleteFilesQueryInput === undefined || deleteFilesQueryInput === null) {
        throw new Error("Missing the required parameter 'deleteFilesQueryInput' when calling deleteFilesEndpointDeleteFilesPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization,
        'customer-id': opts['customerId']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GenericSuccessResponse;
      return this.apiClient.callApi(
        '/delete_files', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the parsedFileParsedFileFileIdGet operation.
     * @callback module:api/FilesApi~parsedFileParsedFileFileIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PresignedURLResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Parsed File
     * This route is deprecated. Use `/user_files_v2` instead.
     * @param {Number} fileId 
     * @param {String} authorization 
     * @param {Object} opts Optional parameters
     * @param {String} [customerId] 
     * @param {module:api/FilesApi~parsedFileParsedFileFileIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PresignedURLResponse}
     */
    parsedFileParsedFileFileIdGet(fileId, authorization, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling parsedFileParsedFileFileIdGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling parsedFileParsedFileFileIdGet");
      }

      let pathParams = {
        'file_id': fileId
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization,
        'customer-id': opts['customerId']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PresignedURLResponse;
      return this.apiClient.callApi(
        '/parsed_file/{file_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the rawFileRawFileFileIdGet operation.
     * @callback module:api/FilesApi~rawFileRawFileFileIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PresignedURLResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Raw File
     * This route is deprecated. Use `/user_files_v2` instead.
     * @param {Number} fileId 
     * @param {String} authorization 
     * @param {Object} opts Optional parameters
     * @param {String} [customerId] 
     * @param {module:api/FilesApi~rawFileRawFileFileIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PresignedURLResponse}
     */
    rawFileRawFileFileIdGet(fileId, authorization, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling rawFileRawFileFileIdGet");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling rawFileRawFileFileIdGet");
      }

      let pathParams = {
        'file_id': fileId
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization,
        'customer-id': opts['customerId']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PresignedURLResponse;
      return this.apiClient.callApi(
        '/raw_file/{file_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the resyncFileResyncFilePost operation.
     * @callback module:api/FilesApi~resyncFileResyncFilePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserFile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resync File
     * @param {String} authorization 
     * @param {module:model/ResyncFileQueryInput} resyncFileQueryInput 
     * @param {Object} opts Optional parameters
     * @param {String} [customerId] 
     * @param {module:api/FilesApi~resyncFileResyncFilePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserFile}
     */
    resyncFileResyncFilePost(authorization, resyncFileQueryInput, opts, callback) {
      opts = opts || {};
      let postBody = resyncFileQueryInput;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling resyncFileResyncFilePost");
      }
      // verify the required parameter 'resyncFileQueryInput' is set
      if (resyncFileQueryInput === undefined || resyncFileQueryInput === null) {
        throw new Error("Missing the required parameter 'resyncFileQueryInput' when calling resyncFileResyncFilePost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization,
        'customer-id': opts['customerId']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserFile;
      return this.apiClient.callApi(
        '/resync_file', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the userFilesUserFilesPost operation.
     * @callback module:api/FilesApi~userFilesUserFilesPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserFile>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User Files
     * This route is deprecated. Use `/user_files_v2` instead.
     * @param {String} authorization 
     * @param {module:model/OrganizationUserFilesToSyncQueryInput} organizationUserFilesToSyncQueryInput 
     * @param {Object} opts Optional parameters
     * @param {String} [customerId] 
     * @param {module:api/FilesApi~userFilesUserFilesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/UserFile>}
     */
    userFilesUserFilesPost(authorization, organizationUserFilesToSyncQueryInput, opts, callback) {
      opts = opts || {};
      let postBody = organizationUserFilesToSyncQueryInput;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling userFilesUserFilesPost");
      }
      // verify the required parameter 'organizationUserFilesToSyncQueryInput' is set
      if (organizationUserFilesToSyncQueryInput === undefined || organizationUserFilesToSyncQueryInput === null) {
        throw new Error("Missing the required parameter 'organizationUserFilesToSyncQueryInput' when calling userFilesUserFilesPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization,
        'customer-id': opts['customerId']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [UserFile];
      return this.apiClient.callApi(
        '/user_files', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the userFilesV2UserFilesV2Post operation.
     * @callback module:api/FilesApi~userFilesV2UserFilesV2PostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserFilesV2} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User Files V2
     * For pre-filtering documents, using `tags_v2` is preferred to using `tags` (which is now deprecated). If both `tags_v2` and `tags` are specified, `tags` is ignored. `tags_v2` enables building complex filters through the use of \"AND\", \"OR\", and negation logic. Take the below input as an example: ```json {     \"OR\": [         {             \"key\": \"subject\",             \"value\": \"holy-bible\",             \"negate\": false         },         {             \"key\": \"person-of-interest\",             \"value\": \"jesus christ\",             \"negate\": false         },         {             \"key\": \"genre\",             \"value\": \"religion\",             \"negate\": true         }         {             \"AND\": [                 {                     \"key\": \"subject\",                     \"value\": \"tao-te-ching\",                     \"negate\": false                 },                 {                     \"key\": \"author\",                     \"value\": \"lao-tzu\",                     \"negate\": false                 }             ]         }     ] } ``` In this case, files will be filtered such that: 1. \"subject\" = \"holy-bible\" OR 2. \"person-of-interest\" = \"jesus christ\" OR 3. \"genre\" != \"religion\" OR 4. \"subject\" = \"tao-te-ching\" AND \"author\" = \"lao-tzu\"  Note that the top level of the query must be either an \"OR\" or \"AND\" array. Currently, nesting is limited to 3. For tag blocks (those with \"key\", \"value\", and \"negate\" keys), the following typing rules apply: 1. \"key\" isn't optional and must be a `string` 2. \"value\" isn't optional and can be `any` or list[`any`] 3. \"negate\" is optional and must be `true` or `false`. If present and `true`, then the filter block is negated in the resulting query. It is `false` by default.
     * @param {String} authorization 
     * @param {module:model/OrganizationUserFilesToSyncQueryInput} organizationUserFilesToSyncQueryInput 
     * @param {Object} opts Optional parameters
     * @param {String} [customerId] 
     * @param {module:api/FilesApi~userFilesV2UserFilesV2PostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserFilesV2}
     */
    userFilesV2UserFilesV2Post(authorization, organizationUserFilesToSyncQueryInput, opts, callback) {
      opts = opts || {};
      let postBody = organizationUserFilesToSyncQueryInput;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling userFilesV2UserFilesV2Post");
      }
      // verify the required parameter 'organizationUserFilesToSyncQueryInput' is set
      if (organizationUserFilesToSyncQueryInput === undefined || organizationUserFilesToSyncQueryInput === null) {
        throw new Error("Missing the required parameter 'organizationUserFilesToSyncQueryInput' when calling userFilesV2UserFilesV2Post");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization,
        'customer-id': opts['customerId']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserFilesV2;
      return this.apiClient.callApi(
        '/user_files_v2', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
