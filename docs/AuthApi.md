# CarbonJsSdk.AuthApi

All URIs are relative to *https://api.carbon.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccessTokenAuthV1AccessTokenGet**](AuthApi.md#getAccessTokenAuthV1AccessTokenGet) | **GET** /auth/v1/access_token | Get Access Token
[**getWhiteLabelingAuthV1WhiteLabelingGet**](AuthApi.md#getWhiteLabelingAuthV1WhiteLabelingGet) | **GET** /auth/v1/white_labeling | Get White Labeling



## getAccessTokenAuthV1AccessTokenGet

> TokenResponse getAccessTokenAuthV1AccessTokenGet(authorization, customerId)

Get Access Token

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.AuthApi();
let authorization = "authorization_example"; // String | 
let customerId = "customerId_example"; // String | 
apiInstance.getAccessTokenAuthV1AccessTokenGet(authorization, customerId, (error, data, response) => {
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
 **customerId** | **String**|  | 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWhiteLabelingAuthV1WhiteLabelingGet

> WhiteLabelingResponse getWhiteLabelingAuthV1WhiteLabelingGet(authorization)

Get White Labeling

Returns whether or not the organization is white labeled and which integrations are white labeled  :param current_user: the current user :param db: the database session :return: a WhiteLabelingResponse

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.AuthApi();
let authorization = "authorization_example"; // String | 
apiInstance.getWhiteLabelingAuthV1WhiteLabelingGet(authorization, (error, data, response) => {
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

### Return type

[**WhiteLabelingResponse**](WhiteLabelingResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

