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
    instance = new CarbonJsSdk.RawTextInput();
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

  describe('RawTextInput', function() {
    it('should create an instance of RawTextInput', function() {
      // uncomment below and update the code to test RawTextInput
      //var instance = new CarbonJsSdk.RawTextInput();
      //expect(instance).to.be.a(CarbonJsSdk.RawTextInput);
    });

    it('should have the property contents (base name: "contents")', function() {
      // uncomment below and update the code to test the property contents
      //var instance = new CarbonJsSdk.RawTextInput();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CarbonJsSdk.RawTextInput();
      //expect(instance).to.be();
    });

    it('should have the property chunkSize (base name: "chunk_size")', function() {
      // uncomment below and update the code to test the property chunkSize
      //var instance = new CarbonJsSdk.RawTextInput();
      //expect(instance).to.be();
    });

    it('should have the property chunkOverlap (base name: "chunk_overlap")', function() {
      // uncomment below and update the code to test the property chunkOverlap
      //var instance = new CarbonJsSdk.RawTextInput();
      //expect(instance).to.be();
    });

    it('should have the property skipEmbeddingGeneration (base name: "skip_embedding_generation")', function() {
      // uncomment below and update the code to test the property skipEmbeddingGeneration
      //var instance = new CarbonJsSdk.RawTextInput();
      //expect(instance).to.be();
    });

    it('should have the property overwriteFileId (base name: "overwrite_file_id")', function() {
      // uncomment below and update the code to test the property overwriteFileId
      //var instance = new CarbonJsSdk.RawTextInput();
      //expect(instance).to.be();
    });

    it('should have the property embeddingModel (base name: "embedding_model")', function() {
      // uncomment below and update the code to test the property embeddingModel
      //var instance = new CarbonJsSdk.RawTextInput();
      //expect(instance).to.be();
    });

    it('should have the property generateSparseVectors (base name: "generate_sparse_vectors")', function() {
      // uncomment below and update the code to test the property generateSparseVectors
      //var instance = new CarbonJsSdk.RawTextInput();
      //expect(instance).to.be();
    });

  });

}));
