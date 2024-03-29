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
    instance = new CarbonJsSdk.AuthApi();
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

  describe('AuthApi', function() {
    describe('getAccessTokenAuthV1AccessTokenGet', function() {
      it('should call getAccessTokenAuthV1AccessTokenGet successfully', function(done) {
        //uncomment below and update the code to test getAccessTokenAuthV1AccessTokenGet
        //instance.getAccessTokenAuthV1AccessTokenGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWhiteLabelingAuthV1WhiteLabelingGet', function() {
      it('should call getWhiteLabelingAuthV1WhiteLabelingGet successfully', function(done) {
        //uncomment below and update the code to test getWhiteLabelingAuthV1WhiteLabelingGet
        //instance.getWhiteLabelingAuthV1WhiteLabelingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
