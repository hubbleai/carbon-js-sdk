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
    instance = new CarbonJsSdk.OAuthURLRequest();
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

  describe('OAuthURLRequest', function() {
    it('should create an instance of OAuthURLRequest', function() {
      // uncomment below and update the code to test OAuthURLRequest
      //var instance = new CarbonJsSdk.OAuthURLRequest();
      //expect(instance).to.be.a(CarbonJsSdk.OAuthURLRequest);
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instance = new CarbonJsSdk.OAuthURLRequest();
      //expect(instance).to.be();
    });

    it('should have the property service (base name: "service")', function() {
      // uncomment below and update the code to test the property service
      //var instance = new CarbonJsSdk.OAuthURLRequest();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new CarbonJsSdk.OAuthURLRequest();
      //expect(instance).to.be();
    });

    it('should have the property chunkSize (base name: "chunk_size")', function() {
      // uncomment below and update the code to test the property chunkSize
      //var instance = new CarbonJsSdk.OAuthURLRequest();
      //expect(instance).to.be();
    });

    it('should have the property chunkOverlap (base name: "chunk_overlap")', function() {
      // uncomment below and update the code to test the property chunkOverlap
      //var instance = new CarbonJsSdk.OAuthURLRequest();
      //expect(instance).to.be();
    });

    it('should have the property skipEmbeddingGeneration (base name: "skip_embedding_generation")', function() {
      // uncomment below and update the code to test the property skipEmbeddingGeneration
      //var instance = new CarbonJsSdk.OAuthURLRequest();
      //expect(instance).to.be();
    });

    it('should have the property embeddingModel (base name: "embedding_model")', function() {
      // uncomment below and update the code to test the property embeddingModel
      //var instance = new CarbonJsSdk.OAuthURLRequest();
      //expect(instance).to.be();
    });

    it('should have the property zendeskSubdomain (base name: "zendesk_subdomain")', function() {
      // uncomment below and update the code to test the property zendeskSubdomain
      //var instance = new CarbonJsSdk.OAuthURLRequest();
      //expect(instance).to.be();
    });

    it('should have the property microsoftTenant (base name: "microsoft_tenant")', function() {
      // uncomment below and update the code to test the property microsoftTenant
      //var instance = new CarbonJsSdk.OAuthURLRequest();
      //expect(instance).to.be();
    });

    it('should have the property sharepointSiteName (base name: "sharepoint_site_name")', function() {
      // uncomment below and update the code to test the property sharepointSiteName
      //var instance = new CarbonJsSdk.OAuthURLRequest();
      //expect(instance).to.be();
    });

    it('should have the property confluenceSubdomain (base name: "confluence_subdomain")', function() {
      // uncomment below and update the code to test the property confluenceSubdomain
      //var instance = new CarbonJsSdk.OAuthURLRequest();
      //expect(instance).to.be();
    });

    it('should have the property generateSparseVectors (base name: "generate_sparse_vectors")', function() {
      // uncomment below and update the code to test the property generateSparseVectors
      //var instance = new CarbonJsSdk.OAuthURLRequest();
      //expect(instance).to.be();
    });

    it('should have the property prependFilenameToChunks (base name: "prepend_filename_to_chunks")', function() {
      // uncomment below and update the code to test the property prependFilenameToChunks
      //var instance = new CarbonJsSdk.OAuthURLRequest();
      //expect(instance).to.be();
    });

    it('should have the property maxItemsPerChunk (base name: "max_items_per_chunk")', function() {
      // uncomment below and update the code to test the property maxItemsPerChunk
      //var instance = new CarbonJsSdk.OAuthURLRequest();
      //expect(instance).to.be();
    });

  });

}));
