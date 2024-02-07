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
    instance = new CarbonJsSdk.FileStatistics();
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

  describe('FileStatistics', function() {
    it('should create an instance of FileStatistics', function() {
      // uncomment below and update the code to test FileStatistics
      //var instance = new CarbonJsSdk.FileStatistics();
      //expect(instance).to.be.a(CarbonJsSdk.FileStatistics);
    });

    it('should have the property fileFormat (base name: "file_format")', function() {
      // uncomment below and update the code to test the property fileFormat
      //var instance = new CarbonJsSdk.FileStatistics();
      //expect(instance).to.be();
    });

    it('should have the property fileSize (base name: "file_size")', function() {
      // uncomment below and update the code to test the property fileSize
      //var instance = new CarbonJsSdk.FileStatistics();
      //expect(instance).to.be();
    });

    it('should have the property numCharacters (base name: "num_characters")', function() {
      // uncomment below and update the code to test the property numCharacters
      //var instance = new CarbonJsSdk.FileStatistics();
      //expect(instance).to.be();
    });

    it('should have the property numTokens (base name: "num_tokens")', function() {
      // uncomment below and update the code to test the property numTokens
      //var instance = new CarbonJsSdk.FileStatistics();
      //expect(instance).to.be();
    });

    it('should have the property numEmbeddings (base name: "num_embeddings")', function() {
      // uncomment below and update the code to test the property numEmbeddings
      //var instance = new CarbonJsSdk.FileStatistics();
      //expect(instance).to.be();
    });

  });

}));
