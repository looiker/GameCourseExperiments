"use strict";
cc._RF.push(module, '3615d0SG3JD6pp6WVZ/hk33', 'global');
// scripts/global.js

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eventListener = require('./event-listener');

var _eventListener2 = _interopRequireDefault(_eventListener);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var global = global || {};
global.event = (0, _eventListener2.default)({});
exports.default = global;
module.exports = exports['default'];

cc._RF.pop();