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
        clickBack:cc.Node,
        background:cc.Node,
        map_ui:cc.Node,
        tower_ALL:cc.Node,
        enemy_ALL:cc.Node,
        path_ALL:cc.Node,
        IfPause:false
    },

    /**
     * 游戏舞台初始化
     */
    onLoad(){       
    },
    /**
     * 游戏开始
     */
    gameStart:function () {
        
    }
});

export default level