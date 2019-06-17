"use strict";
cc._RF.push(module, 'eeb81+On6ZAwqbrDfih3HJl', 'Menu');
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
        tower.RadiusOfAttack = 60 * tower.SizeOfAttack;
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
                    tower.RadiusOfAttack = 60 * tower.SizeOfAttack;
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
                    tower.RadiusOfAttack = 60 * tower.SizeOfAttack;
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
    },

    /**
     * 检查建造菜单位置
     * 保证三个塔按钮不超出背景显示区域，若超出则旋转至不超出的位置
     */
    CheckBuildMenu: function CheckBuildMenu() {
        var check = false;
        var flag = 0;
        //获取按钮
        var archer_button = this.Archer.getChildByName("archer_button");
        var caster_button = this.Caster.getChildByName("caster_button");
        var gunturret_button = this.Gunturret.getChildByName("gunturret_button");
        //获取背景显示区域
        var levelnode = this.node.parent.parent.parent;
        var levelnode_position = levelnode.convertToWorldSpaceAR(cc.v2(0, 0));
        var level_left = levelnode_position.x - levelnode.width / 2;
        var level_right = levelnode_position.x + levelnode.width / 2;
        var level_top = levelnode_position.y + levelnode.height / 2;
        var level_bottom = levelnode_position.y - levelnode.height / 2;

        while (check === false) {
            //获取三个塔按钮坐标
            var archer_button_position = archer_button.convertToWorldSpaceAR(cc.v2(0, 0));
            var caster_button_position = caster_button.convertToWorldSpaceAR(cc.v2(0, 0));
            var gunturret_button_position = gunturret_button.convertToWorldSpaceAR(cc.v2(0, 0));

            //检查箭塔按钮
            if (archer_button_position.x > level_left && archer_button_position.x < level_right && archer_button_position.y > level_bottom && archer_button_position.y < level_top) {
                flag += 1;
            }
            //检查魔法塔按钮
            if (caster_button_position.x > level_left && caster_button_position.x < level_right && caster_button_position.y > level_bottom && caster_button_position.y < level_top) {
                flag += 1;
            }
            //检查炮塔按钮
            if (gunturret_button_position.x > level_left && gunturret_button_position.x < level_right && gunturret_button_position.y > level_bottom && gunturret_button_position.y < level_top) {
                flag += 1;
            }
            //通过flag判断是否超出
            if (flag === 3) {
                check = true;
                return check;
            } else if (flag != 3) {
                //菜单顺时针旋转30°
                this.node.rotation += 30;
                //图标保持竖直
                this.Archer.rotation -= 30;
                this.Caster.rotation -= 30;
                this.Gunturret.rotation -= 30;
                flag = 0;
            }
        }
    },

    /**
     * 检查升级菜单位置
     * 保证三个塔按钮不超出背景显示区域，若超出则旋转至不超出的位置
     */
    CheckUpdateMenu: function CheckUpdateMenu() {
        var check = false;
        var flag = 0;
        //获取按钮
        var update_button = this.Update.getChildByName("update_button");
        var sale_button = this.Sale.getChildByName("sale_button");
        //获取背景显示区域
        var levelnode = this.node.parent.parent.parent;
        var levelnode_position = levelnode.convertToWorldSpaceAR(cc.v2(0, 0));
        var level_left = levelnode_position.x - levelnode.width / 2;
        var level_right = levelnode_position.x + levelnode.width / 2;
        var level_top = levelnode_position.y + levelnode.height / 2;
        var level_bottom = levelnode_position.y - levelnode.height / 2;

        while (check === false) {
            //获取三个塔按钮坐标
            var update_button_position = update_button.convertToWorldSpaceAR(cc.v2(0, 0));
            var sale_button_position = sale_button.convertToWorldSpaceAR(cc.v2(0, 0));

            //检查升级按钮
            if (update_button_position.x > level_left && update_button_position.x < level_right && update_button_position.y > level_bottom && update_button_position.y < level_top) {
                flag += 1;
            }
            //检查售卖按钮
            if (sale_button_position.x > level_left && sale_button_position.x < level_right && sale_button_position.y > level_bottom && sale_button_position.y < level_top) {
                flag += 1;
            }
            //通过flag判断是否超出
            if (flag === 2) {
                check = true;
                return check;
            } else if (flag != 2) {
                //菜单顺时针旋转30°
                this.node.rotation += 30;
                //图标保持竖直
                this.Update.rotation -= 30;
                this.Sale.rotation -= 30;
                flag = 0;
            }
        }
    }
});

cc._RF.pop();