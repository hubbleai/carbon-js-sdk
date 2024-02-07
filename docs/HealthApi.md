# CarbonJsSdk.HealthApi

All URIs are relative to *https://api.carbon.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**healthHealthGet**](HealthApi.md#healthHealthGet) | **GET** /health | Health



## healthHealthGet

> Object healthHealthGet()

Health

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.HealthApi();
apiInstance.healthHealthGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

