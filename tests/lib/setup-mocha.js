var jsdom    = require("jsdom").jsdom;
document = jsdom('<html><head></head><body></body></html>');
window   = document.createWindow();
jQuery   = require('jQuery');
Spinner  = require('../../spin.js');
chai     = require('chai');
