// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import Select_ui from "./Select_ui";

var Map=cc.Class({
    extends: cc.Component,

    properties: {
        map_button:cc.Node,
		sprit:cc.Node,
		lable:cc.Node
    },
	
    onLoad () {
		this.IfConfirm=0;
		//隐藏选定框
		this.map_button.children[0].opacity=0;
	},

    On_MapButton_Clicked:function(){
		//如果选定框未显示则显示选定框,IfConfirm=1；反之隐藏,IfConfirm=0
		if(this.map_button.children[0].opacity==0){
			this.map_button.children[0].opacity=150;	
			this.lable.color=new cc.Color(255,255,255,255);
			Select_ui.game_scene=this.node.name;
		}
		else{
			this.map_button.children[0].opacity=0;
			this.lable.color=new cc.Color(0,0,0,255);
			Select_ui.game_scene="game_scene";
		}
	},
	
	//当点击其他地图的时候，取消当前地图的选定
	On_CB_Clicked:function(){
		this.map_button.children[0].opacity=0;
		this.lable.color=new cc.Color(0,0,0,255);
		if(Select_ui.game_scene==this.node.name)
		Select_ui.game_scene="game_scene";
	},
});