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
    instance = new CarbonJsSdk.WhiteLabelingResponse();
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

  describe('WhiteLabelingResponse', function() {
    it('should create an instance of WhiteLabelingResponse', function() {
      // uncomment below and update the code to test WhiteLabelingResponse
      //var instance = new CarbonJsSdk.WhiteLabelingResponse();
      //expect(instance).to.be.a(CarbonJsSdk.WhiteLabelingResponse);
    });

    it('should have the property removeBranding (base name: "remove_branding")', function() {
      // uncomment below and update the code to test the property removeBranding
      //var instance = new CarbonJsSdk.WhiteLabelingResponse();
      //expect(instance).to.be();
    });

    it('should have the property integrations (base name: "integrations")', function() {
      // uncomment below and update the code to test the property integrations
      //var instance = new CarbonJsSdk.WhiteLabelingResponse();
      //expect(instance).to.be();
    });

  });

}));
