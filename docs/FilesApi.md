# CarbonJsSdk.FilesApi

All URIs are relative to *https://api.carbon.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFileTagsCreateUserFileTagsPost**](FilesApi.md#createFileTagsCreateUserFileTagsPost) | **POST** /create_user_file_tags | Create File Tags
[**createRawTextUploadTextPost**](FilesApi.md#createRawTextUploadTextPost) | **POST** /upload_text | Create Raw Text
[**createUploadFileFromUrlUploadFileFromUrlPost**](FilesApi.md#createUploadFileFromUrlUploadFileFromUrlPost) | **POST** /upload_file_from_url | Create Upload File From Url
[**createUploadFileUploadfilePost**](FilesApi.md#createUploadFileUploadfilePost) | **POST** /uploadfile | Create Upload File
[**deleteFileEndpointDeletefileFileIdDelete**](FilesApi.md#deleteFileEndpointDeletefileFileIdDelete) | **DELETE** /deletefile/{file_id} | Delete File Endpoint
[**deleteFileTagsDeleteUserFileTagsPost**](FilesApi.md#deleteFileTagsDeleteUserFileTagsPost) | **POST** /delete_user_file_tags | Delete File Tags
[**deleteFilesEndpointDeleteFilesPost**](FilesApi.md#deleteFilesEndpointDeleteFilesPost) | **POST** /delete_files | Delete Files Endpoint
[**parsedFileParsedFileFileIdGet**](FilesApi.md#parsedFileParsedFileFileIdGet) | **GET** /parsed_file/{file_id} | Parsed File
[**rawFileRawFileFileIdGet**](FilesApi.md#rawFileRawFileFileIdGet) | **GET** /raw_file/{file_id} | Raw File
[**resyncFileResyncFilePost**](FilesApi.md#resyncFileResyncFilePost) | **POST** /resync_file | Resync File
[**userFilesUserFilesPost**](FilesApi.md#userFilesUserFilesPost) | **POST** /user_files | User Files
[**userFilesV2UserFilesV2Post**](FilesApi.md#userFilesV2UserFilesV2Post) | **POST** /user_files_v2 | User Files V2



## createFileTagsCreateUserFileTagsPost

> UserFile createFileTagsCreateUserFileTagsPost(authorization, organizationUserFileTagCreate, opts)

Create File Tags

A tag is a key-value pair that can be added to a file. This pair can then be used for searches (e.g. embedding searches) in order to narrow down the scope of the search. A file can have any number of tags. The following are reserved keys that cannot be used: - db_embedding_id - organization_id - user_id - organization_user_file_id  Carbon currently supports two data types for tag values - &#x60;string&#x60; and &#x60;list&lt;string&gt;&#x60;. Keys can only be &#x60;string&#x60;. If values other than &#x60;string&#x60; and &#x60;list&lt;string&gt;&#x60; are used, they&#39;re automatically converted to strings (e.g. 4 will become \&quot;4\&quot;).

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.FilesApi();
let authorization = "authorization_example"; // String | 
let organizationUserFileTagCreate = new CarbonJsSdk.OrganizationUserFileTagCreate(); // OrganizationUserFileTagCreate | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.createFileTagsCreateUserFileTagsPost(authorization, organizationUserFileTagCreate, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **organizationUserFileTagCreate** | [**OrganizationUserFileTagCreate**](OrganizationUserFileTagCreate.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**UserFile**](UserFile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRawTextUploadTextPost

> UserFile createRawTextUploadTextPost(authorization, rawTextInput, opts)

Create Raw Text

Carbon supports multiple models for use in generating embeddings for files. For images, we support Vertex AI&#39;s multimodal model; for text, we support OpenAI&#39;s &#x60;text-embedding-ada-002&#x60; and Cohere&#39;s embed-multilingual-v3.0. The model can be specified via the &#x60;embedding_model&#x60; parameter (in the POST body for &#x60;/embeddings&#x60;, and a query  parameter in &#x60;/uploadfile&#x60;). If no model is supplied, the &#x60;text-embedding-ada-002&#x60; is used by default. When performing embedding queries, embeddings from files that used the specified model will be considered in the query. For example, if files A and B have embeddings generated with &#x60;OPENAI&#x60;, and files C and D have embeddings generated with &#x60;COHERE_MULTILINGUAL_V3&#x60;, then by default, queries will only consider files A and B. If &#x60;COHERE_MULTILINGUAL_V3&#x60; is specified as the &#x60;embedding_model&#x60; in &#x60;/embeddings&#x60;, then only files C and D will be considered. Make sure that the set of all files you want considered for a query have embeddings generated via the same model. For now, **do not** set &#x60;VERTEX_MULTIMODAL&#x60; as an &#x60;embedding_model&#x60;. This model is used automatically by Carbon when it detects an image file.

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.FilesApi();
let authorization = "authorization_example"; // String | 
let rawTextInput = new CarbonJsSdk.RawTextInput(); // RawTextInput | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.createRawTextUploadTextPost(authorization, rawTextInput, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **rawTextInput** | [**RawTextInput**](RawTextInput.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**UserFile**](UserFile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createUploadFileFromUrlUploadFileFromUrlPost

> UserFile createUploadFileFromUrlUploadFileFromUrlPost(authorization, uploadFileFromUrlInput, opts)

Create Upload File From Url

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.FilesApi();
let authorization = "authorization_example"; // String | 
let uploadFileFromUrlInput = new CarbonJsSdk.UploadFileFromUrlInput(); // UploadFileFromUrlInput | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.createUploadFileFromUrlUploadFileFromUrlPost(authorization, uploadFileFromUrlInput, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **uploadFileFromUrlInput** | [**UploadFileFromUrlInput**](UploadFileFromUrlInput.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**UserFile**](UserFile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createUploadFileUploadfilePost

> UserFile createUploadFileUploadfilePost(authorization, file, opts)

Create Upload File

This endpoint is used to directly upload local files to Carbon. The &#x60;POST&#x60; request should be a multipart form request. Note that the &#x60;set_page_as_boundary&#x60; query parameter is applicable only to PDFs for now. When this value is set, PDF chunks are at most one page long. Additional information can be retrieved for each chunk, however, namely the coordinates of the bounding box around the chunk (this can be used for things like text highlighting). Following is a description of all possible query parameters: - &#x60;chunk_size&#x60;: the chunk size (in tokens) applied when splitting the document - &#x60;chunk_overlap&#x60;: the chunk overlap (in tokens) applied when splitting the document - &#x60;skip_embedding_generation&#x60;: whether or not to skip the generation of chunks and embeddings - &#x60;set_page_as_boundary&#x60;: described above - &#x60;embedding_model&#x60;: the model used to generate embeddings for the document chunks - &#x60;use_ocr&#x60;: whether or not to use OCR as a preprocessing step prior to generating chunks (only valid for PDFs currently) - &#x60;generate_sparse_vectors&#x60;: whether or not to generate sparse vectors for the file. Required for hybrid search. - &#x60;prepend_filename_to_chunks&#x60;: whether or not to prepend the filename to the chunk text   Carbon supports multiple models for use in generating embeddings for files. For images, we support Vertex AI&#39;s multimodal model; for text, we support OpenAI&#39;s &#x60;text-embedding-ada-002&#x60; and Cohere&#39;s embed-multilingual-v3.0. The model can be specified via the &#x60;embedding_model&#x60; parameter (in the POST body for &#x60;/embeddings&#x60;, and a query  parameter in &#x60;/uploadfile&#x60;). If no model is supplied, the &#x60;text-embedding-ada-002&#x60; is used by default. When performing embedding queries, embeddings from files that used the specified model will be considered in the query. For example, if files A and B have embeddings generated with &#x60;OPENAI&#x60;, and files C and D have embeddings generated with &#x60;COHERE_MULTILINGUAL_V3&#x60;, then by default, queries will only consider files A and B. If &#x60;COHERE_MULTILINGUAL_V3&#x60; is specified as the &#x60;embedding_model&#x60; in &#x60;/embeddings&#x60;, then only files C and D will be considered. Make sure that the set of all files you want considered for a query have embeddings generated via the same model. For now, **do not** set &#x60;VERTEX_MULTIMODAL&#x60; as an &#x60;embedding_model&#x60;. This model is used automatically by Carbon when it detects an image file.

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.FilesApi();
let authorization = "authorization_example"; // String | 
let file = null; // Object | 
let opts = {
  'chunkSize': 56, // Number | Chunk size in tiktoken tokens to be used when processing file.
  'chunkOverlap': 56, // Number | Chunk overlap in tiktoken tokens to be used when processing file.
  'skipEmbeddingGeneration': false, // Boolean | Flag to control whether or not embeddings should be generated and stored             when processing file.
  'setPageAsBoundary': false, // Boolean | Flag to control whether or not to set the a page's worth of content as the maximum             amount of content that can appear in a chunk. Only valid for PDFs. See description route description for             more information.
  'embeddingModel': new CarbonJsSdk.TextEmbeddingGenerators(), // TextEmbeddingGenerators | Embedding model that will be used to embed file chunks.
  'useOcr': false, // Boolean | Whether or not to use OCR when processing files. Only valid for PDFs. Useful for documents with             tables, images, and/or scanned text.
  'generateSparseVectors': false, // Boolean | Whether or not to generate sparse vectors for the file. This is *required* for the file to be a             candidate for hybrid search.
  'prependFilenameToChunks': false, // Boolean | Whether or not to prepend the file's name to chunks.
  'maxItemsPerChunk': 56, // Number | Number of objects per chunk. For json files only.
  'customerId': "customerId_example" // String | 
};
apiInstance.createUploadFileUploadfilePost(authorization, file, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **file** | [**Object**](Object.md)|  | 
 **chunkSize** | **Number**| Chunk size in tiktoken tokens to be used when processing file. | [optional] 
 **chunkOverlap** | **Number**| Chunk overlap in tiktoken tokens to be used when processing file. | [optional] 
 **skipEmbeddingGeneration** | **Boolean**| Flag to control whether or not embeddings should be generated and stored             when processing file. | [optional] [default to false]
 **setPageAsBoundary** | **Boolean**| Flag to control whether or not to set the a page&#39;s worth of content as the maximum             amount of content that can appear in a chunk. Only valid for PDFs. See description route description for             more information. | [optional] [default to false]
 **embeddingModel** | [**TextEmbeddingGenerators**](.md)| Embedding model that will be used to embed file chunks. | [optional] 
 **useOcr** | **Boolean**| Whether or not to use OCR when processing files. Only valid for PDFs. Useful for documents with             tables, images, and/or scanned text. | [optional] [default to false]
 **generateSparseVectors** | **Boolean**| Whether or not to generate sparse vectors for the file. This is *required* for the file to be a             candidate for hybrid search. | [optional] [default to false]
 **prependFilenameToChunks** | **Boolean**| Whether or not to prepend the file&#39;s name to chunks. | [optional] [default to false]
 **maxItemsPerChunk** | **Number**| Number of objects per chunk. For json files only. | [optional] 
 **customerId** | **String**|  | [optional] 

### Return type

[**UserFile**](UserFile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## deleteFileEndpointDeletefileFileIdDelete

> GenericSuccessResponse deleteFileEndpointDeletefileFileIdDelete(fileId, authorization, opts)

Delete File Endpoint

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.FilesApi();
let fileId = 56; // Number | 
let authorization = "authorization_example"; // String | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.deleteFileEndpointDeletefileFileIdDelete(fileId, authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **Number**|  | 
 **authorization** | **String**|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteFileTagsDeleteUserFileTagsPost

> UserFile deleteFileTagsDeleteUserFileTagsPost(authorization, organizationUserFileTagsRemove, opts)

Delete File Tags

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.FilesApi();
let authorization = "authorization_example"; // String | 
let organizationUserFileTagsRemove = new CarbonJsSdk.OrganizationUserFileTagsRemove(); // OrganizationUserFileTagsRemove | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.deleteFileTagsDeleteUserFileTagsPost(authorization, organizationUserFileTagsRemove, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **organizationUserFileTagsRemove** | [**OrganizationUserFileTagsRemove**](OrganizationUserFileTagsRemove.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**UserFile**](UserFile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFilesEndpointDeleteFilesPost

> GenericSuccessResponse deleteFilesEndpointDeleteFilesPost(authorization, deleteFilesQueryInput, opts)

Delete Files Endpoint

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.FilesApi();
let authorization = "authorization_example"; // String | 
let deleteFilesQueryInput = new CarbonJsSdk.DeleteFilesQueryInput(); // DeleteFilesQueryInput | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.deleteFilesEndpointDeleteFilesPost(authorization, deleteFilesQueryInput, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **deleteFilesQueryInput** | [**DeleteFilesQueryInput**](DeleteFilesQueryInput.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## parsedFileParsedFileFileIdGet

> PresignedURLResponse parsedFileParsedFileFileIdGet(fileId, authorization, opts)

Parsed File

This route is deprecated. Use &#x60;/user_files_v2&#x60; instead.

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.FilesApi();
let fileId = 56; // Number | 
let authorization = "authorization_example"; // String | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.parsedFileParsedFileFileIdGet(fileId, authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **Number**|  | 
 **authorization** | **String**|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**PresignedURLResponse**](PresignedURLResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## rawFileRawFileFileIdGet

> PresignedURLResponse rawFileRawFileFileIdGet(fileId, authorization, opts)

Raw File

This route is deprecated. Use &#x60;/user_files_v2&#x60; instead.

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.FilesApi();
let fileId = 56; // Number | 
let authorization = "authorization_example"; // String | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.rawFileRawFileFileIdGet(fileId, authorization, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **Number**|  | 
 **authorization** | **String**|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**PresignedURLResponse**](PresignedURLResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## resyncFileResyncFilePost

> UserFile resyncFileResyncFilePost(authorization, resyncFileQueryInput, opts)

Resync File

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.FilesApi();
let authorization = "authorization_example"; // String | 
let resyncFileQueryInput = new CarbonJsSdk.ResyncFileQueryInput(); // ResyncFileQueryInput | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.resyncFileResyncFilePost(authorization, resyncFileQueryInput, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **resyncFileQueryInput** | [**ResyncFileQueryInput**](ResyncFileQueryInput.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**UserFile**](UserFile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userFilesUserFilesPost

> [UserFile] userFilesUserFilesPost(authorization, organizationUserFilesToSyncQueryInput, opts)

User Files

This route is deprecated. Use &#x60;/user_files_v2&#x60; instead.

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.FilesApi();
let authorization = "authorization_example"; // String | 
let organizationUserFilesToSyncQueryInput = new CarbonJsSdk.OrganizationUserFilesToSyncQueryInput(); // OrganizationUserFilesToSyncQueryInput | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.userFilesUserFilesPost(authorization, organizationUserFilesToSyncQueryInput, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **organizationUserFilesToSyncQueryInput** | [**OrganizationUserFilesToSyncQueryInput**](OrganizationUserFilesToSyncQueryInput.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**[UserFile]**](UserFile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userFilesV2UserFilesV2Post

> UserFilesV2 userFilesV2UserFilesV2Post(authorization, organizationUserFilesToSyncQueryInput, opts)

User Files V2

For pre-filtering documents, using &#x60;tags_v2&#x60; is preferred to using &#x60;tags&#x60; (which is now deprecated). If both &#x60;tags_v2&#x60; and &#x60;tags&#x60; are specified, &#x60;tags&#x60; is ignored. &#x60;tags_v2&#x60; enables building complex filters through the use of \&quot;AND\&quot;, \&quot;OR\&quot;, and negation logic. Take the below input as an example: &#x60;&#x60;&#x60;json {     \&quot;OR\&quot;: [         {             \&quot;key\&quot;: \&quot;subject\&quot;,             \&quot;value\&quot;: \&quot;holy-bible\&quot;,             \&quot;negate\&quot;: false         },         {             \&quot;key\&quot;: \&quot;person-of-interest\&quot;,             \&quot;value\&quot;: \&quot;jesus christ\&quot;,             \&quot;negate\&quot;: false         },         {             \&quot;key\&quot;: \&quot;genre\&quot;,             \&quot;value\&quot;: \&quot;religion\&quot;,             \&quot;negate\&quot;: true         }         {             \&quot;AND\&quot;: [                 {                     \&quot;key\&quot;: \&quot;subject\&quot;,                     \&quot;value\&quot;: \&quot;tao-te-ching\&quot;,                     \&quot;negate\&quot;: false                 },                 {                     \&quot;key\&quot;: \&quot;author\&quot;,                     \&quot;value\&quot;: \&quot;lao-tzu\&quot;,                     \&quot;negate\&quot;: false                 }             ]         }     ] } &#x60;&#x60;&#x60; In this case, files will be filtered such that: 1. \&quot;subject\&quot; &#x3D; \&quot;holy-bible\&quot; OR 2. \&quot;person-of-interest\&quot; &#x3D; \&quot;jesus christ\&quot; OR 3. \&quot;genre\&quot; !&#x3D; \&quot;religion\&quot; OR 4. \&quot;subject\&quot; &#x3D; \&quot;tao-te-ching\&quot; AND \&quot;author\&quot; &#x3D; \&quot;lao-tzu\&quot;  Note that the top level of the query must be either an \&quot;OR\&quot; or \&quot;AND\&quot; array. Currently, nesting is limited to 3. For tag blocks (those with \&quot;key\&quot;, \&quot;value\&quot;, and \&quot;negate\&quot; keys), the following typing rules apply: 1. \&quot;key\&quot; isn&#39;t optional and must be a &#x60;string&#x60; 2. \&quot;value\&quot; isn&#39;t optional and can be &#x60;any&#x60; or list[&#x60;any&#x60;] 3. \&quot;negate\&quot; is optional and must be &#x60;true&#x60; or &#x60;false&#x60;. If present and &#x60;true&#x60;, then the filter block is negated in the resulting query. It is &#x60;false&#x60; by default.

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.FilesApi();
let authorization = "authorization_example"; // String | 
let organizationUserFilesToSyncQueryInput = new CarbonJsSdk.OrganizationUserFilesToSyncQueryInput(); // OrganizationUserFilesToSyncQueryInput | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.userFilesV2UserFilesV2Post(authorization, organizationUserFilesToSyncQueryInput, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**|  | 
 **organizationUserFilesToSyncQueryInput** | [**OrganizationUserFilesToSyncQueryInput**](OrganizationUserFilesToSyncQueryInput.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**UserFilesV2**](UserFilesV2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

