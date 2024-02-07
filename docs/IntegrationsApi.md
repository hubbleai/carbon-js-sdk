# CarbonJsSdk.IntegrationsApi

All URIs are relative to *https://api.carbon.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confluenceListIntegrationsConfluenceListPost**](IntegrationsApi.md#confluenceListIntegrationsConfluenceListPost) | **POST** /integrations/confluence/list | Confluence List
[**confluenceSyncIntegrationsConfluenceSyncPost**](IntegrationsApi.md#confluenceSyncIntegrationsConfluenceSyncPost) | **POST** /integrations/confluence/sync | Confluence Sync
[**freshdeskConnectIntegrationsFreshdeskPost**](IntegrationsApi.md#freshdeskConnectIntegrationsFreshdeskPost) | **POST** /integrations/freshdesk | Freshdesk Connect
[**getOauthUrlIntegrationsOauthUrlPost**](IntegrationsApi.md#getOauthUrlIntegrationsOauthUrlPost) | **POST** /integrations/oauth_url | Get Oauth Url
[**gmailSyncIntegrationsGmailSyncPost**](IntegrationsApi.md#gmailSyncIntegrationsGmailSyncPost) | **POST** /integrations/gmail/sync | Gmail Sync
[**listDataSourceItemsIntegrationsItemsListPost**](IntegrationsApi.md#listDataSourceItemsIntegrationsItemsListPost) | **POST** /integrations/items/list | List Data Source Items
[**outlookSyncIntegrationsOutlookSyncPost**](IntegrationsApi.md#outlookSyncIntegrationsOutlookSyncPost) | **POST** /integrations/outlook/sync | Outlook Sync
[**rssFeedIntegrationsRssFeedPost**](IntegrationsApi.md#rssFeedIntegrationsRssFeedPost) | **POST** /integrations/rss_feed | Rss Feed
[**s3AuthIntegrationsS3Post**](IntegrationsApi.md#s3AuthIntegrationsS3Post) | **POST** /integrations/s3 | S3 Auth
[**s3FilesIntegrationsS3FilesPost**](IntegrationsApi.md#s3FilesIntegrationsS3FilesPost) | **POST** /integrations/s3/files | S3 Files
[**syncDataSourceItemsIntegrationsItemsSyncPost**](IntegrationsApi.md#syncDataSourceItemsIntegrationsItemsSyncPost) | **POST** /integrations/items/sync | Sync Data Source Items
[**syncFilesIntegrationsFilesSyncPost**](IntegrationsApi.md#syncFilesIntegrationsFilesSyncPost) | **POST** /integrations/files/sync | Sync Files



## confluenceListIntegrationsConfluenceListPost

> ListResponse confluenceListIntegrationsConfluenceListPost(authorization, listRequest, opts)

Confluence List

To begin listing a user&#39;s Confluence pages, at least a &#x60;data_source_id&#x60; of a connected Confluence account must be specified. This base request returns a list of root pages for every space the user has access to in a Confluence instance. To traverse further down the user&#39;s page directory, additional requests to this endpoint can be made with the same &#x60;data_source_id&#x60; and with &#x60;parent_id&#x60; set to the id of page from a previous request. For convenience, the &#x60;has_children&#x60; property in each directory item in the response list will flag which pages will return non-empty lists of pages when set as the &#x60;parent_id&#x60;.

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.IntegrationsApi();
let authorization = "authorization_example"; // String | 
let listRequest = new CarbonJsSdk.ListRequest(); // ListRequest | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.confluenceListIntegrationsConfluenceListPost(authorization, listRequest, opts, (error, data, response) => {
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
 **listRequest** | [**ListRequest**](ListRequest.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**ListResponse**](ListResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## confluenceSyncIntegrationsConfluenceSyncPost

> GenericSuccessResponse confluenceSyncIntegrationsConfluenceSyncPost(authorization, syncFilesRequest, opts)

Confluence Sync

After listing pages in a user&#39;s Confluence account, the set of selected page &#x60;ids&#x60; and the connected account&#39;s &#x60;data_source_id&#x60; can be passed into this endpoint to sync them into Carbon. Additional parameters listed below can be used to associate data to the selected pages or alter the behavior of the sync.

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.IntegrationsApi();
let authorization = "authorization_example"; // String | 
let syncFilesRequest = new CarbonJsSdk.SyncFilesRequest(); // SyncFilesRequest | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.confluenceSyncIntegrationsConfluenceSyncPost(authorization, syncFilesRequest, opts, (error, data, response) => {
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
 **syncFilesRequest** | [**SyncFilesRequest**](SyncFilesRequest.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## freshdeskConnectIntegrationsFreshdeskPost

> GenericSuccessResponse freshdeskConnectIntegrationsFreshdeskPost(authorization, freshDeskConnectRequest, opts)

Freshdesk Connect

Refer this article to obtain an API key https://support.freshdesk.com/en/support/solutions/articles/215517.  Once you have an API key, you can make a request to this endpoint along with your freshdesk domain. This will  trigger an automatic sync of the articles in your \&quot;solutions\&quot; tab. Additional parameters below can be used to associate  data with the synced articles or modify the sync behavior.

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.IntegrationsApi();
let authorization = "authorization_example"; // String | 
let freshDeskConnectRequest = new CarbonJsSdk.FreshDeskConnectRequest(); // FreshDeskConnectRequest | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.freshdeskConnectIntegrationsFreshdeskPost(authorization, freshDeskConnectRequest, opts, (error, data, response) => {
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
 **freshDeskConnectRequest** | [**FreshDeskConnectRequest**](FreshDeskConnectRequest.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getOauthUrlIntegrationsOauthUrlPost

> Object getOauthUrlIntegrationsOauthUrlPost(authorization, oAuthURLRequest, opts)

Get Oauth Url

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.IntegrationsApi();
let authorization = "authorization_example"; // String | 
let oAuthURLRequest = new CarbonJsSdk.OAuthURLRequest(); // OAuthURLRequest | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.getOauthUrlIntegrationsOauthUrlPost(authorization, oAuthURLRequest, opts, (error, data, response) => {
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
 **oAuthURLRequest** | [**OAuthURLRequest**](OAuthURLRequest.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gmailSyncIntegrationsGmailSyncPost

> GenericSuccessResponse gmailSyncIntegrationsGmailSyncPost(authorization, gmailSyncInput, opts)

Gmail Sync

Once you have successfully connected your gmail account, you can choose which emails to sync with us using the filters parameter. Filters is a JSON object with key value pairs. It also supports AND and OR operations. For now, we support a limited set of keys listed below.  label: Inbuilt Gmail labels, for example \&quot;Important\&quot; or a custom label you created.   after or before: A date in YYYY/mm/dd format (example 2023/12/31). Gets emails after/before a certain date. You can also use them in combination to get emails from a certain period.   is: Can have the following values - starred, important, snoozed, and unread    Using keys or values outside of the specified values can lead to unexpected behaviour.  An example of a basic query with filters can be &#x60;&#x60;&#x60;json {     \&quot;filters\&quot;: {             \&quot;key\&quot;: \&quot;label\&quot;,             \&quot;value\&quot;: \&quot;Test\&quot;         } } &#x60;&#x60;&#x60; Which will list all emails that have the label \&quot;Test\&quot;.  You can use AND and OR operation in the following way: &#x60;&#x60;&#x60;json {     \&quot;filters\&quot;: {         \&quot;AND\&quot;: [             {                 \&quot;key\&quot;: \&quot;after\&quot;,                 \&quot;value\&quot;: \&quot;2024/01/07\&quot;             },             {                 \&quot;OR\&quot;: [                     {                         \&quot;key\&quot;: \&quot;label\&quot;,                         \&quot;value\&quot;: \&quot;Personal\&quot;                     },                     {                         \&quot;key\&quot;: \&quot;is\&quot;,                         \&quot;value\&quot;: \&quot;starred\&quot;                     }                 ]             }         ]     } } &#x60;&#x60;&#x60; This will return emails after 7th of Jan that are either starred or have the label \&quot;Personal\&quot;.  Note that this is the highest level of nesting we support, i.e. you can&#39;t add more AND/OR filters within the OR filter in the above example.

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.IntegrationsApi();
let authorization = "authorization_example"; // String | 
let gmailSyncInput = new CarbonJsSdk.GmailSyncInput(); // GmailSyncInput | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.gmailSyncIntegrationsGmailSyncPost(authorization, gmailSyncInput, opts, (error, data, response) => {
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
 **gmailSyncInput** | [**GmailSyncInput**](GmailSyncInput.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listDataSourceItemsIntegrationsItemsListPost

> ListDataSourceItemsResponse listDataSourceItemsIntegrationsItemsListPost(authorization, listDataSourceItemsRequest, opts)

List Data Source Items

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.IntegrationsApi();
let authorization = "authorization_example"; // String | 
let listDataSourceItemsRequest = new CarbonJsSdk.ListDataSourceItemsRequest(); // ListDataSourceItemsRequest | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.listDataSourceItemsIntegrationsItemsListPost(authorization, listDataSourceItemsRequest, opts, (error, data, response) => {
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
 **listDataSourceItemsRequest** | [**ListDataSourceItemsRequest**](ListDataSourceItemsRequest.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**ListDataSourceItemsResponse**](ListDataSourceItemsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## outlookSyncIntegrationsOutlookSyncPost

> GenericSuccessResponse outlookSyncIntegrationsOutlookSyncPost(authorization, outlookSyncInput, opts)

Outlook Sync

Once you have successfully connected your Outlook account, you can choose which emails to sync with us using the filters and folder parameter. \&quot;folder\&quot; should be the folder you want to sync from Outlook. By default we get messages from your inbox folder.   Filters is a JSON object with key value pairs. It also supports AND and OR operations. For now, we support a limited set of keys listed below.  category: Custom categories that you created in Outlook.   after or before: A date in YYYY/mm/dd format (example 2023/12/31). Gets emails after/before a certain date. You can also use them in combination to get emails from a certain period.     An example of a basic query with filters can be &#x60;&#x60;&#x60;json {     \&quot;filters\&quot;: {             \&quot;key\&quot;: \&quot;category\&quot;,             \&quot;value\&quot;: \&quot;Test\&quot;         } } &#x60;&#x60;&#x60; Which will list all emails that have the category \&quot;Test\&quot;.    Specifying a custom folder in the same query &#x60;&#x60;&#x60;json {     \&quot;folder\&quot;: \&quot;Folder Name\&quot;,     \&quot;filters\&quot;: {             \&quot;key\&quot;: \&quot;category\&quot;,             \&quot;value\&quot;: \&quot;Test\&quot;         } } &#x60;&#x60;&#x60;  You can use AND and OR operation in the following way: &#x60;&#x60;&#x60;json {     \&quot;filters\&quot;: {         \&quot;AND\&quot;: [             {                 \&quot;key\&quot;: \&quot;after\&quot;,                 \&quot;value\&quot;: \&quot;2024/01/07\&quot;             },             {                 \&quot;OR\&quot;: [                     {                         \&quot;key\&quot;: \&quot;category\&quot;,                         \&quot;value\&quot;: \&quot;Personal\&quot;                     },                     {                         \&quot;key\&quot;: \&quot;category\&quot;,                         \&quot;value\&quot;: \&quot;Test\&quot;                     },                 ]             }         ]     } } &#x60;&#x60;&#x60; This will return emails after 7th of Jan that have either Personal or Test as category.  Note that this is the highest level of nesting we support, i.e. you can&#39;t add more AND/OR filters within the OR filter in the above example.

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.IntegrationsApi();
let authorization = "authorization_example"; // String | 
let outlookSyncInput = new CarbonJsSdk.OutlookSyncInput(); // OutlookSyncInput | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.outlookSyncIntegrationsOutlookSyncPost(authorization, outlookSyncInput, opts, (error, data, response) => {
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
 **outlookSyncInput** | [**OutlookSyncInput**](OutlookSyncInput.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## rssFeedIntegrationsRssFeedPost

> GenericSuccessResponse rssFeedIntegrationsRssFeedPost(authorization, rSSFeedInput, opts)

Rss Feed

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.IntegrationsApi();
let authorization = "authorization_example"; // String | 
let rSSFeedInput = new CarbonJsSdk.RSSFeedInput(); // RSSFeedInput | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.rssFeedIntegrationsRssFeedPost(authorization, rSSFeedInput, opts, (error, data, response) => {
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
 **rSSFeedInput** | [**RSSFeedInput**](RSSFeedInput.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## s3AuthIntegrationsS3Post

> OrganizationUserDataSourceAPI s3AuthIntegrationsS3Post(authorization, s3AuthRequest, opts)

S3 Auth

Create a new IAM user with permissions to: &lt;ol&gt; &lt;li&gt;List all buckets.&lt;/li&gt; &lt;li&gt;Read from the specific buckets and objects to sync with Carbon. Ensure any future buckets or objects carry  the same permissions.&lt;/li&gt; &lt;/ol&gt; Once created, generate an access key for this user and share the credentials with us. We recommend testing this key beforehand.

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.IntegrationsApi();
let authorization = "authorization_example"; // String | 
let s3AuthRequest = new CarbonJsSdk.S3AuthRequest(); // S3AuthRequest | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.s3AuthIntegrationsS3Post(authorization, s3AuthRequest, opts, (error, data, response) => {
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
 **s3AuthRequest** | [**S3AuthRequest**](S3AuthRequest.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**OrganizationUserDataSourceAPI**](OrganizationUserDataSourceAPI.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## s3FilesIntegrationsS3FilesPost

> GenericSuccessResponse s3FilesIntegrationsS3FilesPost(authorization, s3FileSyncInput, opts)

S3 Files

After optionally loading the items via /integrations/items/sync and integrations/items/list, use the bucket name  and object key as the ID in this endpoint to sync them into Carbon. Additional parameters below can associate  data with the selected items or modify the sync behavior

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.IntegrationsApi();
let authorization = "authorization_example"; // String | 
let s3FileSyncInput = new CarbonJsSdk.S3FileSyncInput(); // S3FileSyncInput | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.s3FilesIntegrationsS3FilesPost(authorization, s3FileSyncInput, opts, (error, data, response) => {
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
 **s3FileSyncInput** | [**S3FileSyncInput**](S3FileSyncInput.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## syncDataSourceItemsIntegrationsItemsSyncPost

> OrganizationUserDataSourceAPI syncDataSourceItemsIntegrationsItemsSyncPost(authorization, syncDirectoryRequest, opts)

Sync Data Source Items

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.IntegrationsApi();
let authorization = "authorization_example"; // String | 
let syncDirectoryRequest = new CarbonJsSdk.SyncDirectoryRequest(); // SyncDirectoryRequest | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.syncDataSourceItemsIntegrationsItemsSyncPost(authorization, syncDirectoryRequest, opts, (error, data, response) => {
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
 **syncDirectoryRequest** | [**SyncDirectoryRequest**](SyncDirectoryRequest.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**OrganizationUserDataSourceAPI**](OrganizationUserDataSourceAPI.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## syncFilesIntegrationsFilesSyncPost

> GenericSuccessResponse syncFilesIntegrationsFilesSyncPost(authorization, syncFilesRequest, opts)

Sync Files

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.IntegrationsApi();
let authorization = "authorization_example"; // String | 
let syncFilesRequest = new CarbonJsSdk.SyncFilesRequest(); // SyncFilesRequest | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.syncFilesIntegrationsFilesSyncPost(authorization, syncFilesRequest, opts, (error, data, response) => {
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
 **syncFilesRequest** | [**SyncFilesRequest**](SyncFilesRequest.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

