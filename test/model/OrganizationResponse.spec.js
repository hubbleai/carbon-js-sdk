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
    instance = new CarbonJsSdk.OrganizationResponse();
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

  describe('OrganizationResponse', function() {
    it('should create an instance of OrganizationResponse', function() {
      // uncomment below and update the code to test OrganizationResponse
      //var instance = new CarbonJsSdk.OrganizationResponse();
      //expect(instance).to.be.a(CarbonJsSdk.OrganizationResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CarbonJsSdk.OrganizationResponse();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new CarbonJsSdk.OrganizationResponse();
      //expect(instance).to.be();
    });

    it('should have the property nickname (base name: "nickname")', function() {
      // uncomment below and update the code to test the property nickname
      //var instance = new CarbonJsSdk.OrganizationResponse();
      //expect(instance).to.be();
    });

    it('should have the property removeBranding (base name: "remove_branding")', function() {
      // uncomment below and update the code to test the property removeBranding
      //var instance = new CarbonJsSdk.OrganizationResponse();
      //expect(instance).to.be();
    });

    it('should have the property customBranding (base name: "custom_branding")', function() {
      // uncomment below and update the code to test the property customBranding
      //var instance = new CarbonJsSdk.OrganizationResponse();
      //expect(instance).to.be();
    });

    it('should have the property customLimits (base name: "custom_limits")', function() {
      // uncomment below and update the code to test the property customLimits
      //var instance = new CarbonJsSdk.OrganizationResponse();
      //expect(instance).to.be();
    });

    it('should have the property aggregateFileSize (base name: "aggregate_file_size")', function() {
      // uncomment below and update the code to test the property aggregateFileSize
      //var instance = new CarbonJsSdk.OrganizationResponse();
      //expect(instance).to.be();
    });

    it('should have the property aggregateNumCharacters (base name: "aggregate_num_characters")', function() {
      // uncomment below and update the code to test the property aggregateNumCharacters
      //var instance = new CarbonJsSdk.OrganizationResponse();
      //expect(instance).to.be();
    });

    it('should have the property aggregateNumTokens (base name: "aggregate_num_tokens")', function() {
      // uncomment below and update the code to test the property aggregateNumTokens
      //var instance = new CarbonJsSdk.OrganizationResponse();
      //expect(instance).to.be();
    });

    it('should have the property aggregateNumEmbeddings (base name: "aggregate_num_embeddings")', function() {
      // uncomment below and update the code to test the property aggregateNumEmbeddings
      //var instance = new CarbonJsSdk.OrganizationResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new CarbonJsSdk.OrganizationResponse();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new CarbonJsSdk.OrganizationResponse();
      //expect(instance).to.be();
    });

  });

}));
