(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Tower_ALL.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5a719srgwtDFp+E3FwI/LRO', 'Tower_ALL', __filename);
// scripts/Tower_ALL.js

"use strict";

var _Tower = require("./Tower");

var _Tower2 = _interopRequireDefault(_Tower);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cc.Class({
    extends: cc.Component,
    properties: {
        TowerPrefabs: {
            default: [],
            type: _Tower2.default
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    onLoad: function onLoad() {},


    on_RetractAllMenu_Clicked: function on_RetractAllMenu_Clicked() {
        for (var i = 0; i < this.TowerPrefabs.length; i++) {
            this.TowerPrefabs[i].RetractMenu();
        }
    }

    // update (dt) {},
}); // Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

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
        //# sourceMappingURL=Tower_ALL.js.map
        