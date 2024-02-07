# CarbonJsSdk.UsersApi

All URIs are relative to *https://api.carbon.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**toggleUserFeaturesModifyUserConfigurationPost**](UsersApi.md#toggleUserFeaturesModifyUserConfigurationPost) | **POST** /modify_user_configuration | Toggle User Features
[**userEndpointUserPost**](UsersApi.md#userEndpointUserPost) | **POST** /user | User Endpoint



## toggleUserFeaturesModifyUserConfigurationPost

> GenericSuccessResponse toggleUserFeaturesModifyUserConfigurationPost(authorization, modifyUserConfigurationInput, opts)

Toggle User Features

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.UsersApi();
let authorization = "authorization_example"; // String | 
let modifyUserConfigurationInput = new CarbonJsSdk.ModifyUserConfigurationInput(); // ModifyUserConfigurationInput | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.toggleUserFeaturesModifyUserConfigurationPost(authorization, modifyUserConfigurationInput, opts, (error, data, response) => {
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
 **modifyUserConfigurationInput** | [**ModifyUserConfigurationInput**](ModifyUserConfigurationInput.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userEndpointUserPost

> UserResponse userEndpointUserPost(authorization, userRequestContent)

User Endpoint

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.UsersApi();
let authorization = "authorization_example"; // String | 
let userRequestContent = new CarbonJsSdk.UserRequestContent(); // UserRequestContent | 
apiInstance.userEndpointUserPost(authorization, userRequestContent, (error, data, response) => {
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
 **userRequestContent** | [**UserRequestContent**](UserRequestContent.md)|  | 

### Return type

[**UserResponse**](UserResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

