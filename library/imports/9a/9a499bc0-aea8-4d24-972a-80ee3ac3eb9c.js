"use strict";
cc._RF.push(module, '9a499vArqhNJJcqgO46w+uc', 'Select_ui');
// scripts/Select_ui.js

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
var Select_ui = cc.Class({
	extends: cc.Component,

	properties: {
		setting_button: cc.Node,
		home_button: cc.Node,
		confirm_button: cc.Node,
		map_ALL: cc.Node,
		game_scene: "game_scene"
	},

	// LIFE-CYCLE CALLBACKS:

	// onLoad () {},

	On_ConfirmButton_Clicked: function On_ConfirmButton_Clicked() {
		var Map_ALL = this.map_ALL;
		if (Select_ui.game_scene != "game_scene") cc.director.loadScene(Select_ui.game_scene);else cc.log("请选中任意关卡！");
	},

	/*/检查哪个map被选中，传入参数为Map_ALL
 CheckScene:function(Node){
 	var flag=false;
 	for(let i=0;i<Node.children.length;i++)
 		if(Node.children[i].children[0].children[0].opacity!=0){
 			this.game_scene=Node.children[i].name;
 			flag=true;
 			return flag;
 		}
 },*/

	//当点击背景的时候，取消当前选定地图的选定
	On_CBMain_Clicked: function On_CBMain_Clicked() {
		var select_map = this.map_ALL.getChildByName(Select_ui.game_scene);
		var Lable = select_map.getChildByName("lable");
		select_map.children[0].children[0].opacity = 0;
		Lable.color = new cc.Color(0, 0, 0, 255);
		Select_ui.game_scene = "game_scene";
	},

	On_home_Clicked: function On_home_Clicked() {
		cc.director.loadScene("MainMenu");
	}
	// update (dt) {},

});

exports.default = Select_ui;
module.exports = exports["default"];

cc._RF.pop();