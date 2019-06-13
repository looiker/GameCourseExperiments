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
        start_button:cc.Node,
		about_button:cc.Node,
		about_frame:cc.Node,
		select_ui:"SelectMap"
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
		//隐藏弹窗，并禁用关闭弹窗按钮
		this.about_frame.opacity=0;
		this.about_frame.children[2].getComponent(cc.Button).interactable=false;
	},

    //切换到“关卡选择”场景
    On_Start_Clicked:function(){
		cc.director.loadScene(this.select_ui);
	},
	
	//点击“关于我们”
	On_About_Clicked:function(){
		//弹窗，禁用start和about按钮，启用关闭按钮
		this.about_frame.opacity=255;
		this.start_button.getComponent(cc.Button).interactable=false;
		this.about_button.getComponent(cc.Button).interactable=false;
		this.about_frame.children[2].getComponent(cc.Button).interactable=true;
	},
	
	//点击“关闭”按钮
	On_CloseFrame_Clicked:function(){
		//隐藏弹窗，启用start和about按钮，禁用关闭按钮
		this.about_frame.opacity=0;
		this.start_button.getComponent(cc.Button).interactable=true;
		this.about_button.getComponent(cc.Button).interactable=true;
		this.about_frame.children[2].getComponent(cc.Button).interactable=false;
	},
});
