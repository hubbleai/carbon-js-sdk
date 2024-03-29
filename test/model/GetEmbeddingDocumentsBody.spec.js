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
    instance = new CarbonJsSdk.GetEmbeddingDocumentsBody();
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

  describe('GetEmbeddingDocumentsBody', function() {
    it('should create an instance of GetEmbeddingDocumentsBody', function() {
      // uncomment below and update the code to test GetEmbeddingDocumentsBody
      //var instance = new CarbonJsSdk.GetEmbeddingDocumentsBody();
      //expect(instance).to.be.a(CarbonJsSdk.GetEmbeddingDocumentsBody);
    });

    it('should have the property query (base name: "query")', function() {
      // uncomment below and update the code to test the property query
      //var instance = new CarbonJsSdk.GetEmbeddingDocumentsBody();
      //expect(instance).to.be();
    });

    it('should have the property queryVector (base name: "query_vector")', function() {
      // uncomment below and update the code to test the property queryVector
      //var instance = new CarbonJsSdk.GetEmbeddingDocumentsBody();
      //expect(instance).to.be();
    });

    it('should have the property k (base name: "k")', function() {
      // uncomment below and update the code to test the property k
      //var instance = new CarbonJsSdk.GetEmbeddingDocumentsBody();
      //expect(instance).to.be();
    });

    it('should have the property fileIds (base name: "file_ids")', function() {
      // uncomment below and update the code to test the property fileIds
      //var instance = new CarbonJsSdk.GetEmbeddingDocumentsBody();
      //expect(instance).to.be();
    });

    it('should have the property parentFileIds (base name: "parent_file_ids")', function() {
      // uncomment below and update the code to test the property parentFileIds
      //var instance = new CarbonJsSdk.GetEmbeddingDocumentsBody();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new CarbonJsSdk.GetEmbeddingDocumentsBody();
      //expect(instance).to.be();
    });

    it('should have the property tagsV2 (base name: "tags_v2")', function() {
      // uncomment below and update the code to test the property tagsV2
      //var instance = new CarbonJsSdk.GetEmbeddingDocumentsBody();
      //expect(instance).to.be();
    });

    it('should have the property includeTags (base name: "include_tags")', function() {
      // uncomment below and update the code to test the property includeTags
      //var instance = new CarbonJsSdk.GetEmbeddingDocumentsBody();
      //expect(instance).to.be();
    });

    it('should have the property includeVectors (base name: "include_vectors")', function() {
      // uncomment below and update the code to test the property includeVectors
      //var instance = new CarbonJsSdk.GetEmbeddingDocumentsBody();
      //expect(instance).to.be();
    });

    it('should have the property includeRawFile (base name: "include_raw_file")', function() {
      // uncomment below and update the code to test the property includeRawFile
      //var instance = new CarbonJsSdk.GetEmbeddingDocumentsBody();
      //expect(instance).to.be();
    });

    it('should have the property hybridSearch (base name: "hybrid_search")', function() {
      // uncomment below and update the code to test the property hybridSearch
      //var instance = new CarbonJsSdk.GetEmbeddingDocumentsBody();
      //expect(instance).to.be();
    });

    it('should have the property hybridSearchTuningParameters (base name: "hybrid_search_tuning_parameters")', function() {
      // uncomment below and update the code to test the property hybridSearchTuningParameters
      //var instance = new CarbonJsSdk.GetEmbeddingDocumentsBody();
      //expect(instance).to.be();
    });

    it('should have the property mediaType (base name: "media_type")', function() {
      // uncomment below and update the code to test the property mediaType
      //var instance = new CarbonJsSdk.GetEmbeddingDocumentsBody();
      //expect(instance).to.be();
    });

    it('should have the property embeddingModel (base name: "embedding_model")', function() {
      // uncomment below and update the code to test the property embeddingModel
      //var instance = new CarbonJsSdk.GetEmbeddingDocumentsBody();
      //expect(instance).to.be();
    });

  });

}));
