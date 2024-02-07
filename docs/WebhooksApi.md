# CarbonJsSdk.WebhooksApi

All URIs are relative to *https://api.carbon.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addWebhookUrlAddWebhookPost**](WebhooksApi.md#addWebhookUrlAddWebhookPost) | **POST** /add_webhook | Add Webhook Url
[**deleteWebhookUrlDeleteWebhookWebhookIdDelete**](WebhooksApi.md#deleteWebhookUrlDeleteWebhookWebhookIdDelete) | **DELETE** /delete_webhook/{webhook_id} | Delete Webhook Url
[**webhookUrlsWebhooksPost**](WebhooksApi.md#webhookUrlsWebhooksPost) | **POST** /webhooks | Webhook Urls



## addWebhookUrlAddWebhookPost

> Webhook addWebhookUrlAddWebhookPost(authorization, addWebhookProps)

Add Webhook Url

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.WebhooksApi();
let authorization = "authorization_example"; // String | 
let addWebhookProps = new CarbonJsSdk.AddWebhookProps(); // AddWebhookProps | 
apiInstance.addWebhookUrlAddWebhookPost(authorization, addWebhookProps, (error, data, response) => {
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
 **addWebhookProps** | [**AddWebhookProps**](AddWebhookProps.md)|  | 

### Return type

[**Webhook**](Webhook.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWebhookUrlDeleteWebhookWebhookIdDelete

> GenericSuccessResponse deleteWebhookUrlDeleteWebhookWebhookIdDelete(webhookId, authorization)

Delete Webhook Url

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.WebhooksApi();
let webhookId = 56; // Number | 
let authorization = "authorization_example"; // String | 
apiInstance.deleteWebhookUrlDeleteWebhookWebhookIdDelete(webhookId, authorization, (error, data, response) => {
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
 **webhookId** | **Number**|  | 
 **authorization** | **String**|  | 

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhookUrlsWebhooksPost

> WebhookQueryResponse webhookUrlsWebhooksPost(authorization, webhookQueryInput)

Webhook Urls

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.WebhooksApi();
let authorization = "authorization_example"; // String | 
let webhookQueryInput = new CarbonJsSdk.WebhookQueryInput(); // WebhookQueryInput | 
apiInstance.webhookUrlsWebhooksPost(authorization, webhookQueryInput, (error, data, response) => {
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
 **webhookQueryInput** | [**WebhookQueryInput**](WebhookQueryInput.md)|  | 

### Return type

[**WebhookQueryResponse**](WebhookQueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

