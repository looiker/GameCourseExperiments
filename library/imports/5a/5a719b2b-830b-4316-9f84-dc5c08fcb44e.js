"use strict";
cc._RF.push(module, '5a719srgwtDFp+E3FwI/LRO', 'Tower_ALL');
// scripts/Tower_ALL.js

"use strict";

/**
 * Tower_ALL实现对所有塔的全局调整。
 * 实现以下功能：
 * <1>销毁场上菜单函数
 * 具有以下属性：
 * 1、塔节点列表
 * 2、塔预制件列表
 */

/**
 * 添加状态机
 */
var TowerPosNodeStateP = {
    invild: -1,
    Null: 1,
    Tower: 2,
    BuildMenu: 3,
    UpDateMenu: 4
};

var Tower_ALL = cc.Class({
    extends: cc.Component,
    properties: {
        Tower: {
            default: [],
            type: cc.Node
        },
        TowerPrefabs: cc.Prefab
    },

    onLoad: function onLoad() {
        this.ClickBack = this.node.parent.getChildByName("ClickBack");
    },


    /**
     * 销毁场上菜单
     */
    closeMenu: function closeMenu() {
        //提取列表
        for (var i = 0; i < this.Tower.length; i++) {
            //提取节点
            var node = this.Tower[i];
            //提取塔对象实例
            var Tower = node.getComponent("Tower");
            Tower.attack_circle.opacity = 0;
            //如果塔处于 未建塔&有菜单  BuildMenu  3 状态
            //则销毁菜单后，设置塔状态为 未建塔&无菜单 Null 1
            if (Tower.state === TowerPosNodeStateP.BuildMenu) {
                Tower.menu.destroy();
                Tower.state = TowerPosNodeStateP.Null;
            }
            //如果塔处于 已建塔&有菜单  UpdateMenu  4 状态
            //则销毁菜单后，设置塔状态为 已建塔&无菜单 Tower 2
            if (Tower.state === TowerPosNodeStateP.UpDateMenu) {
                Tower.menu.destroy();
                Tower.state = TowerPosNodeStateP.Tower;
            }
        }
    }

    // update (dt) {},
});

cc._RF.pop();