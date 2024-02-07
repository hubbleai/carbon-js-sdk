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
    instance = new CarbonJsSdk.HybridSearchTuningParams();
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

  describe('HybridSearchTuningParams', function() {
    it('should create an instance of HybridSearchTuningParams', function() {
      // uncomment below and update the code to test HybridSearchTuningParams
      //var instance = new CarbonJsSdk.HybridSearchTuningParams();
      //expect(instance).to.be.a(CarbonJsSdk.HybridSearchTuningParams);
    });

    it('should have the property weightA (base name: "weight_a")', function() {
      // uncomment below and update the code to test the property weightA
      //var instance = new CarbonJsSdk.HybridSearchTuningParams();
      //expect(instance).to.be();
    });

    it('should have the property weightB (base name: "weight_b")', function() {
      // uncomment below and update the code to test the property weightB
      //var instance = new CarbonJsSdk.HybridSearchTuningParams();
      //expect(instance).to.be();
    });

  });

}));
