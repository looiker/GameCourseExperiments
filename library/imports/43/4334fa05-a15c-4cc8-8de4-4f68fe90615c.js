"use strict";
cc._RF.push(module, '4334foFoVxMyI3kT2j+kGFc', 'level');
// scripts/level.js

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by youlicc on 2019/6/16
 * level是每个关卡的类，是每个关卡的根节点，负责监听全局事件，运行游戏时间轴
 * level需要实现以下功能：
 * <1>初始化游戏舞台
 * <2>监听游戏事件
 * <3>开启游戏时间轴
 * <4>关闭游戏时间轴
 * <5>创建阻止游戏操作的按钮（覆盖一个大小和背景一样大的按钮，阻止以下的按钮被点击）
 */
var level = cc.Class({
    extends: cc.Component,

    properties: {
        clickBack: cc.Node,
        background: cc.Node,
        map_ui_Prefab: cc.Prefab,
        tower_ALL: cc.Node,
        enemy_ALL: cc.Node,
        path_ALL: cc.Node,
        IfPause: false,
        PauseInvalidButton: cc.Prefab
    },

    /**
     * 游戏舞台初始化
     */
    onLoad: function onLoad() {
        //创建关卡界面，预制件节点化
        /*let pauseinvalidbutton = new cc.Node;
        pauseinvalidbutton.name = "PauseInvalidButton";*/
        var map_ui = cc.instantiate(this.map_ui_Prefab);
        //添加父节点
        //pauseinvalidbutton.parent = this.node;
        map_ui.parent = this.node;
    },

    /**
     * 游戏开始
     */
    gameStart: function gameStart() {},

    /**
     * 创建阻止游戏操作的按钮
     * 阻止游戏操作，停止游戏时间轴
     */
    CreatPauseInvalidButton: function CreatPauseInvalidButton() {
        //预制件节点化
        var pauseinvalidbutton = cc.instantiate(this.PauseInvalidButton);
        //添加父节点、坐标
        pauseinvalidbutton.parent = this.node;
        pauseinvalidbutton.setSiblingIndex(3);
    },

    /**
     * 销毁阻止游戏操作的按钮
     * 开放游戏操作，继续游戏时间轴
     */
    ClosePauseInvalidButton: function ClosePauseInvalidButton() {
        var pauseinvalidbutton = this.node.getChildByName("PauseInvalidButton");
        pauseinvalidbutton.destroy();
    }
});

exports.default = level;
module.exports = exports["default"];

cc._RF.pop();