(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/event-listener.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'aae5b+SHdFBY7L5OQ6NeMhr', 'event-listener', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=event-listener.js.map
        