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
    instance = new CarbonJsSdk.DeleteFilesQueryInput();
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

  describe('DeleteFilesQueryInput', function() {
    it('should create an instance of DeleteFilesQueryInput', function() {
      // uncomment below and update the code to test DeleteFilesQueryInput
      //var instance = new CarbonJsSdk.DeleteFilesQueryInput();
      //expect(instance).to.be.a(CarbonJsSdk.DeleteFilesQueryInput);
    });

    it('should have the property fileIds (base name: "file_ids")', function() {
      // uncomment below and update the code to test the property fileIds
      //var instance = new CarbonJsSdk.DeleteFilesQueryInput();
      //expect(instance).to.be();
    });

    it('should have the property syncStatuses (base name: "sync_statuses")', function() {
      // uncomment below and update the code to test the property syncStatuses
      //var instance = new CarbonJsSdk.DeleteFilesQueryInput();
      //expect(instance).to.be();
    });

    it('should have the property deleteNonSyncedOnly (base name: "delete_non_synced_only")', function() {
      // uncomment below and update the code to test the property deleteNonSyncedOnly
      //var instance = new CarbonJsSdk.DeleteFilesQueryInput();
      //expect(instance).to.be();
    });

  });

}));
