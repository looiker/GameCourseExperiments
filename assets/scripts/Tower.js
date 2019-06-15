/**
 * Created by youlicc on 2019/6/14
 * Tower调用Tower_ALL中方法
 * Tower具有四种状态（state）：
 *                  1、未建塔&无菜单  Null       1
 *                  2、已建塔&无菜单  Tower      2
 *                  3、未建塔&有菜单  BuildMenu  3
 *                  4、已建塔&有菜单  UpDateMenu 4
 * 实现以下功能：
 * <1>展示建造菜单
 * <2>销毁建造菜单
 * <3>展示升级/售卖菜单
 * <4>销毁升级/售卖菜单
 * 拥有以下属性：
 * 1、建造菜单预制件
 * 2、升级菜单预制件
 * 3、菜单节点
 * 4、塔基节点
 * 5、攻击圈
 * 6、攻击半径
 * 7、半径比例
 * 8、状态
 * 9、等级
 * 10、类型（箭 1 、法 2 、塔 3 、无塔 0）
 * 11、伤害
 */

/**
 * 添加状态机
 */
const TowerPosNodeStateP = {
	invild:    -1,
	Null:       1,
	Tower:      2,
	BuildMenu:  3,
	UpDateMenu: 4
}

var Tower = cc.Class({
    extends: cc.Component,

    properties: {
		BuildMenuPrefab:cc.Prefab,
		UpdateMenuPrefab:cc.Prefab,
		menu:{default:null,type:cc.Node},

		TowerBasic:cc.Node,
		attack_circle:cc.Node,
		SizeOfAttack:1.0,
		RadiusOfAttack:320,
		state:1,
		TowerLevel:0,
		TowerType:0,
		DamageOfAttack:10
    },

    onLoad () {
		//初始化塔数据
		this.constructed=false;
		this.IfBuildMenu=false;

		this.SizeOfAttack=1.0;
		this.RadiusOfAttack=320;
		this.TowerLevel = 0;
		this.TowerType = 0;
		this.DamageOfAttack = 10;
		this.TowerBasic = this.node.getChildByName("Towerbasic_button");
		this.setTowerState(TowerPosNodeStateP.Null);
		this.attack_circle.opacity = 0;
	},

	/**
	 * 为塔设置状态
	 */
	setTowerState:function(state){
		//如果状态重复，不重复设置
		if(this.state === state){
			return
		}
		//给塔设置状态
		switch(state){
			case TowerPosNodeStateP.NUll:
				break;
			case TowerPosNodeStateP.Tower:
				break;
			case TowerPosNodeStateP.BuildMenu:
				break;
			case TowerPosNodeStateP.UpDateMenu:
				break;
		}
		this.state=state;
	},

	/**
	 * 点击塔基
	 * 如果塔状态为Null,展示建造菜单,状态变为BuildMenu
	 * 如果塔状态为BuildMenu，销毁建造菜单，状态变为Null
	 * 
	 */
	showBuildMenu:function(){
		//获取Tower_ALL
		let Tower_ALL=this.node.parent.getComponent("Tower_ALL");
		if(this.state === TowerPosNodeStateP.Null){
			//先销毁场上菜单
			Tower_ALL.closeMenu();
			//显示攻击圈
			this.attack_circle.opacity = 255;
			//将建造菜单预制件节点化
			let menu = cc.instantiate(this.BuildMenuPrefab);
			//添加父节点、坐标
			menu.parent = this.node;
			menu.position = this.node.position;
			//添加到塔的属性中
			this.menu = menu;
			//修改塔的状态
			this.setTowerState(TowerPosNodeStateP.BuildMenu);
		}
		else if(this.state === TowerPosNodeStateP.BuildMenu){
			//销毁建造菜单
			Tower_ALL.closeMenu();
		}
	},

	/**
	 * 点击塔基
	 * 如果塔状态为Tower,展示升级菜单，状态变为UpdateMenu
	 * 如果塔状态为UpdateMenu，销毁升级菜单，状态变为Tower
	 */
	showUpdateMenu:function(){
		//获取Tower_ALL
		let Tower_ALL=this.node.parent.getComponent("Tower_ALL");
		if(this.state === TowerPosNodeStateP.Tower){
			//先销毁场上菜单
			Tower_ALL.closeMenu();
			//显示攻击圈
			this.attack_circle.opacity = 255;
			//将升级菜单预制件节点化
			let menu = cc.instantiate(this.UpdateMenuPrefab);
			//添加父子节点、坐标
			menu.parent = this.node;
			menu.position = this.node.position;
			//添加到塔的属性中
			this.menu = menu;
			//修改塔的状态
			this.setTowerState(TowerPosNodeStateP.UpDateMenu);
		}
		else if(this.state === TowerPosNodeStateP.UpDateMenu){
			//销毁菜单
			Tower_ALL.closeMenu();
		}
	},

});

export default Tower;
