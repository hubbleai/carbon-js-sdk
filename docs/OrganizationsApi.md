# CarbonJsSdk.OrganizationsApi

All URIs are relative to *https://api.carbon.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOrganizationOrganizationGet**](OrganizationsApi.md#getOrganizationOrganizationGet) | **GET** /organization | Get Organization



## getOrganizationOrganizationGet

> OrganizationResponse getOrganizationOrganizationGet(authorization)

Get Organization

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.OrganizationsApi();
let authorization = "authorization_example"; // String | 
apiInstance.getOrganizationOrganizationGet(authorization, (error, data, response) => {
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

[**OrganizationResponse**](OrganizationResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

