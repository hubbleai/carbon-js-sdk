# CarbonJsSdk.EmbeddingsApi

All URIs are relative to *https://api.carbon.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**embeddingsEmbeddingsPost**](EmbeddingsApi.md#embeddingsEmbeddingsPost) | **POST** /embeddings | Embeddings
[**retrieveEmbeddingsAndContentTextChunksPost**](EmbeddingsApi.md#retrieveEmbeddingsAndContentTextChunksPost) | **POST** /text_chunks | Retrieve Embeddings And Content
[**uploadChunksAndEmbeddingsUploadChunksAndEmbeddingsPost**](EmbeddingsApi.md#uploadChunksAndEmbeddingsUploadChunksAndEmbeddingsPost) | **POST** /upload_chunks_and_embeddings | Upload Chunks And Embeddings



## embeddingsEmbeddingsPost

> DocumentResponseList embeddingsEmbeddingsPost(authorization, getEmbeddingDocumentsBody, opts)

Embeddings

For pre-filtering documents, using &#x60;tags_v2&#x60; is preferred to using &#x60;tags&#x60; (which is now deprecated). If both &#x60;tags_v2&#x60; and &#x60;tags&#x60; are specified, &#x60;tags&#x60; is ignored. &#x60;tags_v2&#x60; enables building complex filters through the use of \&quot;AND\&quot;, \&quot;OR\&quot;, and negation logic. Take the below input as an example: &#x60;&#x60;&#x60;json {     \&quot;OR\&quot;: [         {             \&quot;key\&quot;: \&quot;subject\&quot;,             \&quot;value\&quot;: \&quot;holy-bible\&quot;,             \&quot;negate\&quot;: false         },         {             \&quot;key\&quot;: \&quot;person-of-interest\&quot;,             \&quot;value\&quot;: \&quot;jesus christ\&quot;,             \&quot;negate\&quot;: false         },         {             \&quot;key\&quot;: \&quot;genre\&quot;,             \&quot;value\&quot;: \&quot;religion\&quot;,             \&quot;negate\&quot;: true         }         {             \&quot;AND\&quot;: [                 {                     \&quot;key\&quot;: \&quot;subject\&quot;,                     \&quot;value\&quot;: \&quot;tao-te-ching\&quot;,                     \&quot;negate\&quot;: false                 },                 {                     \&quot;key\&quot;: \&quot;author\&quot;,                     \&quot;value\&quot;: \&quot;lao-tzu\&quot;,                     \&quot;negate\&quot;: false                 }             ]         }     ] } &#x60;&#x60;&#x60; In this case, files will be filtered such that: 1. \&quot;subject\&quot; &#x3D; \&quot;holy-bible\&quot; OR 2. \&quot;person-of-interest\&quot; &#x3D; \&quot;jesus christ\&quot; OR 3. \&quot;genre\&quot; !&#x3D; \&quot;religion\&quot; OR 4. \&quot;subject\&quot; &#x3D; \&quot;tao-te-ching\&quot; AND \&quot;author\&quot; &#x3D; \&quot;lao-tzu\&quot;  Note that the top level of the query must be either an \&quot;OR\&quot; or \&quot;AND\&quot; array. Currently, nesting is limited to 3. For tag blocks (those with \&quot;key\&quot;, \&quot;value\&quot;, and \&quot;negate\&quot; keys), the following typing rules apply: 1. \&quot;key\&quot; isn&#39;t optional and must be a &#x60;string&#x60; 2. \&quot;value\&quot; isn&#39;t optional and can be &#x60;any&#x60; or list[&#x60;any&#x60;] 3. \&quot;negate\&quot; is optional and must be &#x60;true&#x60; or &#x60;false&#x60;. If present and &#x60;true&#x60;, then the filter block is negated in the resulting query. It is &#x60;false&#x60; by default.   When querying embeddings, you can optionally specify the &#x60;media_type&#x60; parameter in your request. By default (if not set), it is equal to \&quot;TEXT\&quot;. This means that the query will be performed over files that have been parsed as text (for now, this covers all files except image files). If it is equal to \&quot;IMAGE\&quot;, the query will be performed over image files (for now, &#x60;.jpg&#x60; and &#x60;.png&#x60; files). You can think of this field as an additional filter on top of any filters set in &#x60;file_ids&#x60; and   When &#x60;hybrid_search&#x60; is set to true, a combination of keyword search and semantic search are used to rank and select candidate embeddings during information retrieval. By default, these search methods are weighted equally during the ranking process. To adjust the weight (or \&quot;importance\&quot;) of each search method, you can use the &#x60;hybrid_search_tuning_parameters&#x60; property. The description for the different tuning parameters are: - &#x60;weight_a&#x60;: weight to assign to semantic search - &#x60;weight_b&#x60;: weight to assign to keyword search  You must ensure that &#x60;sum(weight_a, weight_b,..., weight_n)&#x60; for all *n* weights is equal to 1. The equality has an error tolerance of 0.001 to account for possible floating point issues.  In order to use hybrid search for a customer across a set of documents, two flags need to be enabled: 1. Use the &#x60;/modify_user_configuration&#x60; endpoint to to enable &#x60;sparse_vectors&#x60; for the customer. The payload body for this request is below: &#x60;&#x60;&#x60; {   \&quot;configuration_key_name\&quot;: \&quot;sparse_vectors\&quot;,   \&quot;value\&quot;: {     \&quot;enabled\&quot;: true   } } &#x60;&#x60;&#x60; 2. Make sure hybrid search is enabled for the documents across which you want to perform the search. For the &#x60;/uploadfile&#x60; endpoint, this can be done by setting the following query parameter: &#x60;generate_sparse_vectors&#x3D;true&#x60;   Carbon supports multiple models for use in generating embeddings for files. For images, we support Vertex AI&#39;s multimodal model; for text, we support OpenAI&#39;s &#x60;text-embedding-ada-002&#x60; and Cohere&#39;s embed-multilingual-v3.0. The model can be specified via the &#x60;embedding_model&#x60; parameter (in the POST body for &#x60;/embeddings&#x60;, and a query  parameter in &#x60;/uploadfile&#x60;). If no model is supplied, the &#x60;text-embedding-ada-002&#x60; is used by default. When performing embedding queries, embeddings from files that used the specified model will be considered in the query. For example, if files A and B have embeddings generated with &#x60;OPENAI&#x60;, and files C and D have embeddings generated with &#x60;COHERE_MULTILINGUAL_V3&#x60;, then by default, queries will only consider files A and B. If &#x60;COHERE_MULTILINGUAL_V3&#x60; is specified as the &#x60;embedding_model&#x60; in &#x60;/embeddings&#x60;, then only files C and D will be considered. Make sure that the set of all files you want considered for a query have embeddings generated via the same model. For now, **do not** set &#x60;VERTEX_MULTIMODAL&#x60; as an &#x60;embedding_model&#x60;. This model is used automatically by Carbon when it detects an image file.

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.EmbeddingsApi();
let authorization = "authorization_example"; // String | 
let getEmbeddingDocumentsBody = new CarbonJsSdk.GetEmbeddingDocumentsBody(); // GetEmbeddingDocumentsBody | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.embeddingsEmbeddingsPost(authorization, getEmbeddingDocumentsBody, opts, (error, data, response) => {
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
 **getEmbeddingDocumentsBody** | [**GetEmbeddingDocumentsBody**](GetEmbeddingDocumentsBody.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**DocumentResponseList**](DocumentResponseList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveEmbeddingsAndContentTextChunksPost

> EmbeddingsAndChunksResponse retrieveEmbeddingsAndContentTextChunksPost(authorization, embeddingsAndChunksQueryInput, opts)

Retrieve Embeddings And Content

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.EmbeddingsApi();
let authorization = "authorization_example"; // String | 
let embeddingsAndChunksQueryInput = new CarbonJsSdk.EmbeddingsAndChunksQueryInput(); // EmbeddingsAndChunksQueryInput | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.retrieveEmbeddingsAndContentTextChunksPost(authorization, embeddingsAndChunksQueryInput, opts, (error, data, response) => {
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
 **embeddingsAndChunksQueryInput** | [**EmbeddingsAndChunksQueryInput**](EmbeddingsAndChunksQueryInput.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**EmbeddingsAndChunksResponse**](EmbeddingsAndChunksResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadChunksAndEmbeddingsUploadChunksAndEmbeddingsPost

> GenericSuccessResponse uploadChunksAndEmbeddingsUploadChunksAndEmbeddingsPost(authorization, chunksAndEmbeddingsUploadInput, opts)

Upload Chunks And Embeddings

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.EmbeddingsApi();
let authorization = "authorization_example"; // String | 
let chunksAndEmbeddingsUploadInput = new CarbonJsSdk.ChunksAndEmbeddingsUploadInput(); // ChunksAndEmbeddingsUploadInput | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.uploadChunksAndEmbeddingsUploadChunksAndEmbeddingsPost(authorization, chunksAndEmbeddingsUploadInput, opts, (error, data, response) => {
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
 **chunksAndEmbeddingsUploadInput** | [**ChunksAndEmbeddingsUploadInput**](ChunksAndEmbeddingsUploadInput.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

