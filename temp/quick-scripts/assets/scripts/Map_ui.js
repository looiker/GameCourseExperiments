(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Map_ui.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ea512fYk91Jb4cM+eV5kO/l', 'Map_ui', __filename);
// scripts/Map_ui.js

"use strict";

var _global = require("./global");

var _global2 = _interopRequireDefault(_global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by youlicc on 2019/6/16
 * Map_ui是每个关卡中的界面，负责及时记录当前时间的关卡状态（血量、钱币、怪物波数、是否暂停、是否退出）
 * 开始游戏、暂停游戏，需要调用level中的函数，不是Map_ui应该实现的功能
 * 
 * Map_ui实现以下功能：
 * <1>实时记录并修改关卡状态：血量、钱币、怪物波数
 * <2>点击开始按钮，开始本关游戏，游戏时间轴开始
 * <3>点击暂停按钮，游戏进入暂停状态，创建暂停窗口，创建阻止游戏按钮，并暂停游戏时间轴
 * Map_ui具有以下属性：
 * 1、钱币节点
 * 2、血量节点
 * 3、怪物波数节点
 * 4、开始按钮
 * 5、暂停按钮
 * 6、暂停窗口预制件
 */
var Map_ui = cc.Class({
	extends: cc.Component,

	properties: {
		diamond: cc.Node,
		HP: cc.Node,
		Wave: cc.Node,
		Start_button: cc.Node,
		Pause_button: cc.Node,
		PauseFramePrefab: cc.Prefab
	},

	onLoad: function onLoad() {
		//左上角数据初始化
		this.diamond.children[2].getComponent(cc.Label).string = "1500";
		this.HP.children[2].getComponent(cc.Label).string = "15/15";
		this.Wave.children[2].getComponent(cc.Label).string = "9/9    波";
	},


	/**
  * 点击暂停按钮
  * 创建暂停窗口，创建阻止游戏按钮，并暂停游戏时间轴
  */
	On_Pause_clicked: function On_Pause_clicked() {
		this.CreatPauseFrame();
		var level = this.node.parent.getComponent("level");
		level.CreatPauseInvalidButton();
	},

	/**
  * 销毁暂停窗口
  */
	ClosePauseFrame: function ClosePauseFrame() {
		this.node.getChildByName("PauseFrame").destroy();
	},

	/**
  * 创建暂停窗口
  */
	CreatPauseFrame: function CreatPauseFrame() {
		//预制件节点化
		var pauseframe = cc.instantiate(this.PauseFramePrefab);
		//添加父节点
		pauseframe.parent = this.node;
	},

	Startgame: function Startgame() {
		cc.log("startbtnclick");
		_global2.default.event.fire("game_start");
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
        