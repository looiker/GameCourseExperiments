"use strict";
cc._RF.push(module, 'aae5b+SHdFBY7L5OQ6NeMhr', 'event-listener');
// scripts/event-listener.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var EventListener = function EventListener(obj) {
  var Regsiter = {};
  obj.on = function (name, method) {
    if (!Regsiter.hasOwnProperty(name)) {
      Regsiter[name] = [];
    }
    Regsiter[name].push(method);
  };
  obj.fire = function (name) {
    if (Regsiter.hasOwnProperty(name)) {
      var handlerList = Regsiter[name];
      for (var i = 0; i < handlerList.length; i++) {
        var handler = handlerList[i];
        var args = [];
        for (var j = 1; j < arguments.length; j++) {
          args.push(arguments[j]);
        }
        handler.apply(this, args);
      }
    }
  };
  obj.off = function (name, method) {
    if (Regsiter.hasOwnProperty(name)) {
      var handlerList = Regsiter[name];
      for (var i = 0; i < handlerList.length; i++) {
        if (handlerList[i] === method) {
          handlerList.splice(i, 1);
        }
      }
    }
  };
  return obj;
};
exports.default = EventListener;
module.exports = exports["default"];

cc._RF.pop();