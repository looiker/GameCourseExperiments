(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/PauseFrame.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '06d4diHxz9Dqpwdjdteh85T', 'PauseFrame', __filename);
// scripts/PauseFrame.js

"use strict";

/**
 * Created by youlicc on 2019/6/16
 * PauseFrame是关卡内的暂停窗口类，负责控制游戏的暂停与开始
 * 需要实现以下功能：
 * <1>点击确定按钮，返回选关界面
 * <2>点击取消按钮，销毁暂停窗口，销毁组织游戏按钮，继续游戏时间轴
 */
var PauseFrame = cc.Class({
    extends: cc.Component,

    properties: {
        Yes_button: cc.Node,
        Cancle_button: cc.Node
    },

    /**
    * 点击暂停窗口的确定按钮
     * 场景退回选关界面
    */
    On_PauseFrameYes_clicked: function On_PauseFrameYes_clicked() {
        cc.director.loadScene("SelectMap");
    },

    /**
    * 点击暂停窗口的取消按钮
    * 销毁暂停窗口，销毁阻止游戏按钮，并继续游戏时间轴，游戏按钮可以被点击
    */
    On_PauseFrameCancel_clicked: function On_PauseFrameCancel_clicked() {
        var level = this.node.parent.parent.getComponent("level");
        level.ClosePauseInvalidButton();
        var map_ui = this.node.parent.getComponent("Map_ui");
        map_ui.ClosePauseFrame();
    }
});

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
        //# sourceMappingURL=PauseFrame.js.map
        