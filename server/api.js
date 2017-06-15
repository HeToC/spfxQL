/*
node_modules/@microsoft/sp-webpart-workbench/lib/api/
*/

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
//var api_1 = require("@microsoft/sp-client-preview/lib/local/api");
var workbenchPage_1 = require("@microsoft/sp-webpart-workbench/lib/api/workbenchPage");
var getWebParts_1 = require("@microsoft/sp-client-preview/lib/local/api/getWebParts");
var getPublic_1 = require("@microsoft/sp-client-preview/lib/local/api/getPublic");

//var api2 = sp_lodash_subset_1.cloneDeep(api_1.default);

var api = { };

//api['/temp/*.*'] = getPublic_1.default ;
api['/api'] =  function(req, res) {
    console.log(req, res);
    res.send('Hello World!');
};
api['/workbench'] = workbenchPage_1.default;
api['/getwebparts'] =  getWebParts_1.default;
api['/*.*'] = getPublic_1.default ;

exports.default = api;