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
        clickBack:cc.Node,
        background:cc.Node,
        map_ui_Prefab:cc.Prefab,
        tower_ALL:cc.Node,
        enemy_ALL:cc.Node,
        path_ALL:cc.Node,
        IfPause:false,
        PauseInvalidButton:cc.Prefab
    },

    /**
     * 游戏舞台初始化
     */
    onLoad(){
        //创建关卡界面，预制件节点化
        let map_ui = cc.instantiate(this.map_ui_Prefab);
        //添加父节点
        map_ui.parent = this.node;
        //调整map_ui在子节点中顺序，保证Tower的按钮在其上方
        map_ui.setSiblingIndex(2);
    },
    /**
     * 游戏开始
     */
    gameStart:function () {
        
    },

    /**
     * 创建阻止游戏操作的按钮
     * 阻止游戏操作，停止游戏时间轴
     */
    CreatPauseInvalidButton:function(){
        //预制件节点化
        let pauseinvalidbutton = cc.instantiate(this.PauseInvalidButton);
        //添加父节点、坐标
        pauseinvalidbutton.parent = this.node;
        //调整level的子节点的顺序，保证tower被pibutton盖住，pibutton被map_ui盖住
        this.tower_ALL.setSiblingIndex(2);
        pauseinvalidbutton.setSiblingIndex(3);
    },

    /**
     * 销毁阻止游戏操作的按钮
     * 开放游戏操作，继续游戏时间轴
     */
    ClosePauseInvalidButton:function(){
        let pauseinvalidbutton = this.node.getChildByName("PauseInvalidButton");
        pauseinvalidbutton.destroy();
    },
});

export default level