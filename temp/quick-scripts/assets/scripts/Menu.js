(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Menu.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'eeb81+On6ZAwqbrDfih3HJl', 'Menu', __filename);
// scripts/Menu.js

"use strict";

/**
 * Menu实现塔菜单下的按钮事件
 * 实现以下功能：
 * <1>在BuildMenu状态下：点击三塔（箭、法、炮）按钮时，建造塔，修改塔属性。closeMenu()后，塔状态设置为Tower。
 * <2>在UpdateMenu状态下：点击升级，可升级塔，塔等级+1，修改塔属性。closeMenu()。（无需设置塔状态，销毁后已是Tower）。
 * <3>在UpdateMenu状态下：点击售卖，可售卖塔，初始化塔基。closeMenu()后，设置塔状态为Null。
 * 
 * 具有以下属性：
 * 1、箭塔节点
 * 2、魔法塔节点
 * 3、炮塔节点
 * 4、升级节点
 * 5、售卖节点
 * 6、父节点Tower
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

var Menu = cc.Class({
    extends: cc.Component,

    properties: {
        Archer: cc.Node,
        Caster: cc.Node,
        Gunturret: cc.Node,
        Update: cc.Node,
        Sale: cc.Node,
        Tower: cc.Node
    },

    onLoad: function onLoad() {
        this.Tower = this.node.parent;
    },


    /**
     * 点击箭塔
     */
    Build_Archer: function Build_Archer() {
        var tower = this.Tower.getComponent("Tower");
        var tower_all = this.Tower.parent.getComponent("Tower_ALL");
        //获取图片url
        var realUrl = cc.url.raw('texture/Tower/archer1.png');
        //获取TowerBasic
        var towerbasic = tower.TowerBasic.getComponent(cc.Button);
        //创建Sprite
        var tempSprite = new cc.SpriteFrame(realUrl);
        //更换塔立绘
        towerbasic.normalSprite = tempSprite;
        towerbasic.pressedSprite = tempSprite;
        towerbasic.hoverSprite = tempSprite;
        //修改塔属性
        tower.SizeOfAttack = 1.5;
        tower.RadiusOfAttack = 320 * tower.SizeOfAttack;
        tower.attack_circle.children[0].scale = tower.SizeOfAttack;
        tower.TowerLevel = 1;
        tower.TowerType = 1;
        tower.DamageOfAttack = 10;
        //销毁建造菜单
        tower_all.closeMenu();
        //设置塔状态为Tower
        tower.setTowerState(TowerPosNodeStateP.Tower);
        //保留攻击圈
        tower.attack_circle.opacity = 255;
    },

    /**
     * 点击魔法塔
     */
    Build_Caster: function Build_Caster() {
        var tower = this.Tower.getComponent("Tower");
        var tower_all = this.Tower.parent.getComponent("Tower_ALL");
        var realUrl = cc.url.raw('texture/Tower/caster1.png');
        var towerbasic = tower.TowerBasic.getComponent(cc.Button);
        var tempSprite = new cc.SpriteFrame(realUrl);
        towerbasic.normalSprite = tempSprite;
        towerbasic.pressedSprite = tempSprite;
        towerbasic.hoverSprite = tempSprite;

        tower.SizeOfAttack = 1.0;
        tower.RadiusOfAttack = 320 * tower.SizeOfAttack;
        tower.attack_circle.children[0].scale = tower.SizeOfAttack;
        tower.TowerLevel = 1;
        tower.TowerType = 2;
        tower.DamageOfAttack = 25;

        tower_all.closeMenu();
        tower.setTowerState(TowerPosNodeStateP.Tower);
        tower.attack_circle.opacity = 255;
    },

    /**
     * 点击炮塔
     */
    Build_Gunturret: function Build_Gunturret() {
        var tower = this.Tower.getComponent("Tower");
        var tower_all = this.Tower.parent.getComponent("Tower_ALL");
        var realUrl = cc.url.raw('texture/Tower/gunturret1.png');
        var towerbasic = tower.TowerBasic.getComponent(cc.Button);
        var tempSprite = new cc.SpriteFrame(realUrl);
        towerbasic.normalSprite = tempSprite;
        towerbasic.pressedSprite = tempSprite;
        towerbasic.hoverSprite = tempSprite;

        tower.SizeOfAttack = 0.8;
        tower.RadiusOfAttack = 320 * tower.SizeOfAttack;
        tower.attack_circle.children[0].scale = tower.SizeOfAttack;
        tower.TowerLevel = 1;
        tower.TowerType = 3;
        tower.DamageOfAttack = 18;

        tower_all.closeMenu();
        tower.setTowerState(TowerPosNodeStateP.Tower);
        tower.attack_circle.opacity = 255;
    },

    /**
     * 点击升级 需要根据塔的类型进行不同升级
     */
    Update_Tower: function Update_Tower() {
        var tower = this.Tower.getComponent("Tower");
        var tower_all = this.Tower.parent.getComponent("Tower_ALL");
        var towertype = tower.TowerType;
        switch (towertype) {
            case 1:
                {
                    //获取图片url
                    var realUrl = cc.url.raw('texture/Tower/archer2.png');
                    //获取TowerBasic
                    var towerbasic = tower.TowerBasic.getComponent(cc.Button);
                    //创建Sprite
                    var tempSprite = new cc.SpriteFrame(realUrl);
                    //更换塔立绘
                    towerbasic.normalSprite = tempSprite;
                    towerbasic.pressedSprite = tempSprite;
                    towerbasic.hoverSprite = tempSprite;
                    //修改塔属性
                    tower.SizeOfAttack = 2.0;
                    tower.RadiusOfAttack = 320 * tower.SizeOfAttack;
                    tower.attack_circle.children[0].scale = tower.SizeOfAttack;
                    tower.TowerLevel += 1;
                    tower.TowerType = 10;
                    tower.DamageOfAttack = 12;
                    //销毁建造菜单
                    tower_all.closeMenu();
                    //升级塔不需要设置塔状态，销毁时已经设置了
                    break;
                }
            case 2:
                {
                    var _realUrl = cc.url.raw('texture/Tower/caster2.png');
                    var _towerbasic = tower.TowerBasic.getComponent(cc.Button);
                    var _tempSprite = new cc.SpriteFrame(_realUrl);
                    _towerbasic.normalSprite = _tempSprite;
                    _towerbasic.pressedSprite = _tempSprite;
                    _towerbasic.hoverSprite = _tempSprite;

                    tower.SizeOfAttack = 1.2;
                    tower.RadiusOfAttack = 320 * tower.SizeOfAttack;
                    tower.attack_circle.children[0].scale = tower.SizeOfAttack;
                    tower.TowerLevel += 1;
                    tower.TowerType = 20;
                    tower.DamageOfAttack = 40;

                    tower_all.closeMenu();
                    break;
                }
            case 3:
                {
                    var _realUrl2 = cc.url.raw('texture/Tower/gunturret2.png');
                    var _towerbasic2 = tower.TowerBasic.getComponent(cc.Button);
                    var _tempSprite2 = new cc.SpriteFrame(_realUrl2);
                    _towerbasic2.normalSprite = _tempSprite2;
                    _towerbasic2.pressedSprite = _tempSprite2;
                    _towerbasic2.hoverSprite = _tempSprite2;

                    tower.SizeOfAttack = 1.0;
                    tower.RadiusOfAttack = 320 * tower.SizeOfAttack;
                    tower.attack_circle.children[0].scale = tower.SizeOfAttack;
                    tower.TowerLevel += 1;
                    tower.TowerType = 30;
                    tower.DamageOfAttack = 25;

                    tower_all.closeMenu();
                    break;
                }
            default:
                {
                    cc.log("已经升级到最高级！");
                    break;
                }
        }
        //保留攻击圈
        tower.attack_circle.opacity = 255;
    },

    /**
     * 点击售卖
     */
    Sale_Tower: function Sale_Tower() {
        var tower = this.Tower.getComponent("Tower");
        var tower_all = this.Tower.parent.getComponent("Tower_ALL");
        //修改塔数据
        tower.SizeOfAttack = 1.0;
        tower.RadiusOfAttack = 320;
        tower.attack_circle.children[0].scale = tower.SizeOfAttack;
        tower.TowerLevel = 0;
        //初始化塔基立绘
        var realUrl = cc.url.raw('texture/Tower/Tower_normal.png');
        var towerbasic = tower.TowerBasic.getComponent(cc.Button);
        var tempSprite = new cc.SpriteFrame(realUrl);
        towerbasic.normalSprite = tempSprite;
        towerbasic.pressedSprite = tempSprite;
        realUrl = cc.url.raw('texture/Tower/Tower_hover.png');
        tempSprite = new cc.SpriteFrame(realUrl);
        towerbasic.hoverSprite = tempSprite;
        //销毁建造菜单
        tower_all.closeMenu();
        //设置塔状态为Null
        tower.setTowerState(TowerPosNodeStateP.Null);
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
        //# sourceMappingURL=Menu.js.map
        