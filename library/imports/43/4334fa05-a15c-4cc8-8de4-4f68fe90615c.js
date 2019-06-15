"use strict";
cc._RF.push(module, '4334foFoVxMyI3kT2j+kGFc', 'level');
// scripts/level.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var level = cc.Class({
    extends: cc.Component,

    properties: {
        clickBack: cc.Node,
        background: cc.Node,
        map_ui: cc.Node,
        tower_ALL: cc.Node,
        enemy_ALL: cc.Node,
        path_ALL: cc.Node,
        IfPause: false
    },

    /**
     * 游戏舞台初始化
     */
    onLoad: function onLoad() {},

    /**
     * 游戏开始
     */
    gameStart: function gameStart() {}
});

exports.default = level;
module.exports = exports["default"];

cc._RF.pop();