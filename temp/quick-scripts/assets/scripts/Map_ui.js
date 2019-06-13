(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Map_ui.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ea512fYk91Jb4cM+eV5kO/l', 'Map_ui', __filename);
// scripts/Map_ui.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
				extends: cc.Component,

				properties: {
								diamond: cc.Node,
								HP: cc.Node,
								Wave: cc.Node,
								Pause_button: cc.Node,
								Pause_Frame: cc.Node
				},

				// LIFE-CYCLE CALLBACKS:

				// onLoad () {},

				onLoad: function onLoad() {
								//左上角数据初始化
								this.diamond.children[2].getComponent(cc.Label).string = "1500";
								this.HP.children[2].getComponent(cc.Label).string = "15/15";
								this.Wave.children[2].getComponent(cc.Label).string = "9/9    波";
								//暂停窗口初始化
								this.Pause_Frame.getComponent(cc.Widget).isAligenTop = true;
								this.Pause_Frame.getComponent(cc.Widget).isAligenBottom = true;
								this.Pause_Frame.getComponent(cc.Widget).target = this.node;
								//隐藏暂停窗口
								this.Pause_Frame.opacity = 0;
								//禁用暂停窗口按钮
								this.Pause_Frame.children[3].getComponent(cc.Button).interactable = false;
								this.Pause_Frame.children[4].getComponent(cc.Button).interactable = false;
								//将暂停窗口移动到屏幕外
								this.Pause_Frame.getComponent(cc.Widget).top = -0.75;
								this.Pause_Frame.getComponent(cc.Widget).bottom = 1.25;
								this.Pause_Frame.getComponent(cc.Widget).updateAlignment();
				},


				On_Pause_clicked: function On_Pause_clicked() {
								//显示暂停窗口
								this.Pause_Frame.opacity = 255;
								//激活暂停窗口按钮
								this.Pause_Frame.children[3].getComponent(cc.Button).interactable = true;
								this.Pause_Frame.children[4].getComponent(cc.Button).interactable = true;
								//将暂停窗口移动到屏幕内
								this.Pause_Frame.getComponent(cc.Widget).top = 0.25;
								this.Pause_Frame.getComponent(cc.Widget).bottom = 0.25;
								this.Pause_Frame.getComponent(cc.Widget).updateAlignment();
				},

				On_PauseFrameCancel_clicked: function On_PauseFrameCancel_clicked() {
								//隐藏暂停窗口
								this.Pause_Frame.opacity = 0;
								//禁用暂停窗口按钮
								this.Pause_Frame.children[3].getComponent(cc.Button).interactable = false;
								this.Pause_Frame.children[4].getComponent(cc.Button).interactable = false;
								//将暂停窗口移动到屏幕外
								this.Pause_Frame.getComponent(cc.Widget).top = -0.75;
								this.Pause_Frame.getComponent(cc.Widget).bottom = 1.25;
								this.Pause_Frame.getComponent(cc.Widget).updateAlignment();
				},

				On_PauseFrameYes_clicked: function On_PauseFrameYes_clicked() {
								//场景退回选关界面
								cc.director.loadScene("SelectMap");
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
        //# sourceMappingURL=Map_ui.js.map
        