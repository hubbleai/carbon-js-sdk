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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CarbonJsSdk);
  }
}(this, function(expect, CarbonJsSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CarbonJsSdk.IntegrationsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('IntegrationsApi', function() {
    describe('confluenceListIntegrationsConfluenceListPost', function() {
      it('should call confluenceListIntegrationsConfluenceListPost successfully', function(done) {
        //uncomment below and update the code to test confluenceListIntegrationsConfluenceListPost
        //instance.confluenceListIntegrationsConfluenceListPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('confluenceSyncIntegrationsConfluenceSyncPost', function() {
      it('should call confluenceSyncIntegrationsConfluenceSyncPost successfully', function(done) {
        //uncomment below and update the code to test confluenceSyncIntegrationsConfluenceSyncPost
        //instance.confluenceSyncIntegrationsConfluenceSyncPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('freshdeskConnectIntegrationsFreshdeskPost', function() {
      it('should call freshdeskConnectIntegrationsFreshdeskPost successfully', function(done) {
        //uncomment below and update the code to test freshdeskConnectIntegrationsFreshdeskPost
        //instance.freshdeskConnectIntegrationsFreshdeskPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getOauthUrlIntegrationsOauthUrlPost', function() {
      it('should call getOauthUrlIntegrationsOauthUrlPost successfully', function(done) {
        //uncomment below and update the code to test getOauthUrlIntegrationsOauthUrlPost
        //instance.getOauthUrlIntegrationsOauthUrlPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('gmailSyncIntegrationsGmailSyncPost', function() {
      it('should call gmailSyncIntegrationsGmailSyncPost successfully', function(done) {
        //uncomment below and update the code to test gmailSyncIntegrationsGmailSyncPost
        //instance.gmailSyncIntegrationsGmailSyncPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listDataSourceItemsIntegrationsItemsListPost', function() {
      it('should call listDataSourceItemsIntegrationsItemsListPost successfully', function(done) {
        //uncomment below and update the code to test listDataSourceItemsIntegrationsItemsListPost
        //instance.listDataSourceItemsIntegrationsItemsListPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('outlookSyncIntegrationsOutlookSyncPost', function() {
      it('should call outlookSyncIntegrationsOutlookSyncPost successfully', function(done) {
        //uncomment below and update the code to test outlookSyncIntegrationsOutlookSyncPost
        //instance.outlookSyncIntegrationsOutlookSyncPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rssFeedIntegrationsRssFeedPost', function() {
      it('should call rssFeedIntegrationsRssFeedPost successfully', function(done) {
        //uncomment below and update the code to test rssFeedIntegrationsRssFeedPost
        //instance.rssFeedIntegrationsRssFeedPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('s3AuthIntegrationsS3Post', function() {
      it('should call s3AuthIntegrationsS3Post successfully', function(done) {
        //uncomment below and update the code to test s3AuthIntegrationsS3Post
        //instance.s3AuthIntegrationsS3Post(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('s3FilesIntegrationsS3FilesPost', function() {
      it('should call s3FilesIntegrationsS3FilesPost successfully', function(done) {
        //uncomment below and update the code to test s3FilesIntegrationsS3FilesPost
        //instance.s3FilesIntegrationsS3FilesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('syncDataSourceItemsIntegrationsItemsSyncPost', function() {
      it('should call syncDataSourceItemsIntegrationsItemsSyncPost successfully', function(done) {
        //uncomment below and update the code to test syncDataSourceItemsIntegrationsItemsSyncPost
        //instance.syncDataSourceItemsIntegrationsItemsSyncPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('syncFilesIntegrationsFilesSyncPost', function() {
      it('should call syncFilesIntegrationsFilesSyncPost successfully', function(done) {
        //uncomment below and update the code to test syncFilesIntegrationsFilesSyncPost
        //instance.syncFilesIntegrationsFilesSyncPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));