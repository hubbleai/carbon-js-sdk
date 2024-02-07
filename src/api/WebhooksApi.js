/**
 * Carbon
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AddWebhookProps from '../model/AddWebhookProps';
import GenericSuccessResponse from '../model/GenericSuccessResponse';
import HTTPValidationError from '../model/HTTPValidationError';
import Webhook from '../model/Webhook';
import WebhookQueryInput from '../model/WebhookQueryInput';
import WebhookQueryResponse from '../model/WebhookQueryResponse';

/**
* Webhooks service.
* @module api/WebhooksApi
* @version 1.0.0
*/
export default class WebhooksApi {

    /**
    * Constructs a new WebhooksApi. 
    * @alias module:api/WebhooksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addWebhookUrlAddWebhookPost operation.
     * @callback module:api/WebhooksApi~addWebhookUrlAddWebhookPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Webhook Url
     * @param {String} authorization 
     * @param {module:model/AddWebhookProps} addWebhookProps 
     * @param {module:api/WebhooksApi~addWebhookUrlAddWebhookPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */
    addWebhookUrlAddWebhookPost(authorization, addWebhookProps, callback) {
      let postBody = addWebhookProps;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling addWebhookUrlAddWebhookPost");
      }
      // verify the required parameter 'addWebhookProps' is set
      if (addWebhookProps === undefined || addWebhookProps === null) {
        throw new Error("Missing the required parameter 'addWebhookProps' when calling addWebhookUrlAddWebhookPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Webhook;
      return this.apiClient.callApi(
        '/add_webhook', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWebhookUrlDeleteWebhookWebhookIdDelete operation.
     * @callback module:api/WebhooksApi~deleteWebhookUrlDeleteWebhookWebhookIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GenericSuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Webhook Url
     * @param {Number} webhookId 
     * @param {String} authorization 
     * @param {module:api/WebhooksApi~deleteWebhookUrlDeleteWebhookWebhookIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GenericSuccessResponse}
     */
    deleteWebhookUrlDeleteWebhookWebhookIdDelete(webhookId, authorization, callback) {
      let postBody = null;
      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling deleteWebhookUrlDeleteWebhookWebhookIdDelete");
      }
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling deleteWebhookUrlDeleteWebhookWebhookIdDelete");
      }

      let pathParams = {
        'webhook_id': webhookId
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GenericSuccessResponse;
      return this.apiClient.callApi(
        '/delete_webhook/{webhook_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the webhookUrlsWebhooksPost operation.
     * @callback module:api/WebhooksApi~webhookUrlsWebhooksPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WebhookQueryResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Webhook Urls
     * @param {String} authorization 
     * @param {module:model/WebhookQueryInput} webhookQueryInput 
     * @param {module:api/WebhooksApi~webhookUrlsWebhooksPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WebhookQueryResponse}
     */
    webhookUrlsWebhooksPost(authorization, webhookQueryInput, callback) {
      let postBody = webhookQueryInput;
      // verify the required parameter 'authorization' is set
      if (authorization === undefined || authorization === null) {
        throw new Error("Missing the required parameter 'authorization' when calling webhookUrlsWebhooksPost");
      }
      // verify the required parameter 'webhookQueryInput' is set
      if (webhookQueryInput === undefined || webhookQueryInput === null) {
        throw new Error("Missing the required parameter 'webhookQueryInput' when calling webhookUrlsWebhooksPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'authorization': authorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WebhookQueryResponse;
      return this.apiClient.callApi(
        '/webhooks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}