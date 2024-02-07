# CarbonJsSdk.UtilitiesApi

All URIs are relative to *https://api.carbon.ai*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetchUrlsFetchUrlsGet**](UtilitiesApi.md#fetchUrlsFetchUrlsGet) | **GET** /fetch_urls | Fetch Urls
[**fetchYoutubeTranscriptsFetchYoutubeTranscriptGet**](UtilitiesApi.md#fetchYoutubeTranscriptsFetchYoutubeTranscriptGet) | **GET** /fetch_youtube_transcript | Fetch Youtube Transcripts
[**scrapeSitemapScrapeSitemapPost**](UtilitiesApi.md#scrapeSitemapScrapeSitemapPost) | **POST** /scrape_sitemap | Scrape Sitemap
[**searchUrlsSearchUrlsGet**](UtilitiesApi.md#searchUrlsSearchUrlsGet) | **GET** /search_urls | Search Urls
[**sitemapProcessSitemapGet**](UtilitiesApi.md#sitemapProcessSitemapGet) | **GET** /process_sitemap | Sitemap
[**webScrapeWebScrapePost**](UtilitiesApi.md#webScrapeWebScrapePost) | **POST** /web_scrape | Web Scrape



## fetchUrlsFetchUrlsGet

> FetchURLsResponse fetchUrlsFetchUrlsGet(url, authorization, opts)

Fetch Urls

Extracts all URLs from a webpage.   Args:     url (str): URL of the webpage  Returns:     FetchURLsResponse: A response object with a list of URLs extracted from the webpage and the webpage content.

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.UtilitiesApi();
let url = null; // Object | 
let authorization = "authorization_example"; // String | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.fetchUrlsFetchUrlsGet(url, authorization, opts, (error, data, response) => {
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
 **url** | [**Object**](.md)|  | 
 **authorization** | **String**|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**FetchURLsResponse**](FetchURLsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## fetchYoutubeTranscriptsFetchYoutubeTranscriptGet

> YoutubeTranscriptResponse fetchYoutubeTranscriptsFetchYoutubeTranscriptGet(id, authorization, opts)

Fetch Youtube Transcripts

Fetches english transcripts from YouTube videos.  Args:     id (str): The ID of the YouTube video.      raw (bool): Whether to return the raw transcript or not. Defaults to False.  Returns:     dict: A dictionary with the transcript of the YouTube video.

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.UtilitiesApi();
let id = null; // Object | 
let authorization = "authorization_example"; // String | 
let opts = {
  'raw': null, // Object | 
  'customerId': "customerId_example" // String | 
};
apiInstance.fetchYoutubeTranscriptsFetchYoutubeTranscriptGet(id, authorization, opts, (error, data, response) => {
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
 **id** | [**Object**](.md)|  | 
 **authorization** | **String**|  | 
 **raw** | [**Object**](.md)|  | [optional] 
 **customerId** | **String**|  | [optional] 

### Return type

[**YoutubeTranscriptResponse**](YoutubeTranscriptResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## scrapeSitemapScrapeSitemapPost

> Object scrapeSitemapScrapeSitemapPost(authorization, sitemapScrapeRequest, opts)

Scrape Sitemap

Extracts all URLs from a sitemap and performs a web scrape on each of them.  Args:     sitemap_url (str): URL of the sitemap  Returns:     dict: A response object with the status of the scraping job message.--&gt;

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.UtilitiesApi();
let authorization = "authorization_example"; // String | 
let sitemapScrapeRequest = new CarbonJsSdk.SitemapScrapeRequest(); // SitemapScrapeRequest | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.scrapeSitemapScrapeSitemapPost(authorization, sitemapScrapeRequest, opts, (error, data, response) => {
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
 **sitemapScrapeRequest** | [**SitemapScrapeRequest**](SitemapScrapeRequest.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## searchUrlsSearchUrlsGet

> FetchURLsResponse searchUrlsSearchUrlsGet(query, authorization, opts)

Search Urls

Perform a web search and obtain a list of relevant URLs.  As an illustration, when you perform a search for “content related to MRNA,” you will receive a list of links such as the following:      - https://tomrenz.substack.com/p/mrna-and-why-it-matters      - https://www.statnews.com/2020/11/10/the-story-of-mrna-how-a-once-dismissed-idea-became-a-leading-technology-in-the-covid-vaccine-race/      - https://www.statnews.com/2022/11/16/covid-19-vaccines-were-a-success-but-mrna-still-has-a-delivery-problem/          - https://joomi.substack.com/p/were-still-being-misled-about-how  Subsequently, you can submit these links to the web_scrape endpoint in order to retrieve the content of the respective web pages.  Args:     query (str): Query to search for  Returns:     FetchURLsResponse: A response object with a list of URLs for a given search query.

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.UtilitiesApi();
let query = null; // Object | 
let authorization = "authorization_example"; // String | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.searchUrlsSearchUrlsGet(query, authorization, opts, (error, data, response) => {
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
 **query** | [**Object**](.md)|  | 
 **authorization** | **String**|  | 
 **customerId** | **String**|  | [optional] 

### Return type

[**FetchURLsResponse**](FetchURLsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sitemapProcessSitemapGet

> Object sitemapProcessSitemapGet(url, authorization, opts)

Sitemap

Retrieves all URLs from a sitemap, which can subsequently be utilized with our &#x60;web_scrape&#x60; endpoint.  &lt;!--Args:     url (str): URL of the sitemap  Returns:     dict: A dictionary with a list of URLs extracted from the sitemap.--&gt;

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.UtilitiesApi();
let url = null; // Object | 
let authorization = "authorization_example"; // String | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.sitemapProcessSitemapGet(url, authorization, opts, (error, data, response) => {
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
 **url** | [**Object**](.md)|  | 
 **authorization** | **String**|  | 
 **customerId** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webScrapeWebScrapePost

> Object webScrapeWebScrapePost(authorization, webscrapeRequest, opts)

Web Scrape

Conduct a web scrape on a given webpage URL. Our web scraper is fully compatible with JavaScript and supports recursion depth, enabling you to efficiently extract all content from the target website.  &lt;!--Args:     scraping_requests (List[WebscrapeRequest]): A list of WebscrapeRequest objects.      Returns:     dict: A response object with the status of the scraping job message.--&gt;

### Example

```javascript
import CarbonJsSdk from 'carbon-js-sdk';

let apiInstance = new CarbonJsSdk.UtilitiesApi();
let authorization = "authorization_example"; // String | 
let webscrapeRequest = [new CarbonJsSdk.WebscrapeRequest()]; // [WebscrapeRequest] | 
let opts = {
  'customerId': "customerId_example" // String | 
};
apiInstance.webScrapeWebScrapePost(authorization, webscrapeRequest, opts, (error, data, response) => {
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
 **webscrapeRequest** | [**[WebscrapeRequest]**](WebscrapeRequest.md)|  | 
 **customerId** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

