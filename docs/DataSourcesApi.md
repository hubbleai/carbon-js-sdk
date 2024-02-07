# CarbonJsSdk.DataSourcesApi

All URIs are relative to *https://api.carbon.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**revokeAccessTokenRevokeAccessTokenPost**](DataSourcesApi.md#revokeAccessTokenRevokeAccessTokenPost) | **POST** /revoke_access_token | Revoke Access Token
[**userDataSourcesUserDataSourcesPost**](DataSourcesApi.md#userDataSourcesUserDataSourcesPost) | **POST** /user_data_sources | User Data Sources



## revokeAccessTokenRevokeAccessTokenPost

> GenericSuccessResponse revokeAccessTokenRevokeAccessTokenPost(authorization, revokeAccessTokenInput, opts)

Revoke Access Token

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.DataSourcesApi();
let authorization = "authorization_example"; // String | 
let revokeAccessTokenInput = new CarbonJsSdk.RevokeAccessTokenInput(); // RevokeAccessTokenInput | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.revokeAccessTokenRevokeAccessTokenPost(authorization, revokeAccessTokenInput, opts, (error, data, response) => {
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
 **revokeAccessTokenInput** | [**RevokeAccessTokenInput**](RevokeAccessTokenInput.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userDataSourcesUserDataSourcesPost

> OrganizationUserDataSourceResponse userDataSourcesUserDataSourcesPost(authorization, organizationUserDataSourceQueryInput, opts)

User Data Sources

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.DataSourcesApi();
let authorization = "authorization_example"; // String | 
let organizationUserDataSourceQueryInput = new CarbonJsSdk.OrganizationUserDataSourceQueryInput(); // OrganizationUserDataSourceQueryInput | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.userDataSourcesUserDataSourcesPost(authorization, organizationUserDataSourceQueryInput, opts, (error, data, response) => {
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
 **organizationUserDataSourceQueryInput** | [**OrganizationUserDataSourceQueryInput**](OrganizationUserDataSourceQueryInput.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**OrganizationUserDataSourceResponse**](OrganizationUserDataSourceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

