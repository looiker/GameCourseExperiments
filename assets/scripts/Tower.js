var Tower=cc.Class({
    extends: cc.Component,

    properties: {
		constructed:false,
		attack_circle:cc.Node,
		menu:cc.Node,
		archer:cc.Node,
		caster:cc.Node,
		gunturret:cc.Node,
		UpDate:cc.Node,
		sale:cc.Node,
		SizeOfAttack:1.0,
		RadiusOfAttack:320
    },

    onLoad () {
		//初始化塔数据
		this.constructed=false;
		this.RadiusOfAttack=this.attack_circle.width/2;
		this.RetractMenu();
	},

    /*点击塔基*/
    On_TB_clicked:function(){
		//如果游戏未暂停
        if (this.IfPause() == false) {
			//检查是否有其他塔菜单显示
			let flag=this.CheckOtherTower();
			//未建塔，且未显示菜单。则显示箭塔、法塔、炮塔
			if(this.constructed==false&&this.menu.opacity==0){
				this.menu.opacity=255;
				this.archer.opacity=255;
				this.archer.children[0].getComponent(cc.Button).interactable=true;
				this.caster.opacity=255;
				this.caster.children[0].getComponent(cc.Button).interactable=true;
				this.gunturret.opacity=255;
				this.gunturret.children[0].getComponent(cc.Button).interactable=true;
				this.UpDate.opacity=0;
				this.sale.opacity=0;
			}
			//已建塔，且未显示菜单。则显示升级、售卖、攻击圈
			else if(this.constructed==true&&this.menu.opacity==0){
				this.menu.opacity=255;
				this.archer.opacity=0;
				this.caster.opacity=0;
				this.gunturret.opacity=0;
				this.UpDate.opacity=255;
				this.UpDate.children[0].getComponent(cc.Button).interactable=true;
				this.sale.opacity=255;
				this.sale.children[0].getComponent(cc.Button).interactable=true;
				this.attack_circle.opacity=255;
			}
			//未建塔，且已显示菜单。则隐藏箭塔、法塔、炮塔
			else if(this.constructed==false&&this.menu.opacity==255){
				this.RetractMenu();
			}
			//已建塔，且已显示菜单。则隐藏升级、售卖、攻击圈
			else if(this.constructed==true&&this.menu.opacity==255){
				this.RetractMenu();
			}
			//若有其他塔菜单，则隐藏其菜单
			this.ClickBackOtherTower(flag);
		}
	    //如果游戏暂停，禁用塔按钮
		else{
            this.SettingInteractableFalse();
		}
	},
	
	/*点击箭塔*/
    On_archer_clicked: function () {
        //如果游戏未暂停
	    if (this.IfPause() == false) {
	        this.constructed = true;
	        this.RetractMenu();
	        //更换箭塔立绘
	        var realUrl = cc.url.raw('texture/Tower/archer.png');
	        var temp = this.node.getChildByName("Towerbasic_button").getComponent(cc.Button);
	        var temp_Sprite = new cc.SpriteFrame(realUrl);
	        temp.normalSprite = temp_Sprite;
	        temp.pressedSprite = temp_Sprite;
	        temp.hoverSprite = temp_Sprite;
	        //this.node.getChildByName("Towerbasic_button").getComponent(cc.Sprite).spriteFrame.setTexture(texture);
	        //修改塔攻击范围
	        this.SizeOfAttack = 1.5;
	        this.RadiusOfAttack = this.SizeOfAttack * this.RadiusOfAttack
	        //更改攻击圈图片大小
	        this.node.getChildByName("attack_circle_standard").getChildByName("attack_circle_sprite").scale = this.SizeOfAttack;
	    }
	    //如果游戏暂停，禁用塔按钮
	    else {
	        this.SettingInteractableFalse();
	    }
	},
	
	/*点击魔法塔*/
    On_caster_clicked: function () {
        //如果游戏未暂停
        if (this.IfPause() == false) {
            this.constructed = true;
            this.RetractMenu();
            //更换魔法塔立绘
            var realUrl = cc.url.raw('texture/Tower/caster.png');
            var temp = this.node.getChildByName("Towerbasic_button").getComponent(cc.Button);
            var temp_Sprite = new cc.SpriteFrame(realUrl);
            temp.normalSprite = temp_Sprite;
            temp.pressedSprite = temp_Sprite;
            temp.hoverSprite = temp_Sprite;
            //修改塔攻击范围
            this.SizeOfAttack = 1.2;
            this.RadiusOfAttack = this.SizeOfAttack * this.RadiusOfAttack
            //更改攻击圈图片大小
            this.node.getChildByName("attack_circle_standard").getChildByName("attack_circle_sprite").scale = this.SizeOfAttack;
        }
        //如果游戏暂停，禁用塔按钮
        else {
            this.SettingInteractableFalse();
        }
	},
	
	/*点击炮塔*/
    On_gunturret_clicked: function () {
        //如果游戏未暂停
        if (this.IfPause() == false) {
            this.constructed = true;
            this.RetractMenu();
            //更换炮塔立绘
            var realUrl = cc.url.raw('texture/Tower/gunturret.png');
            var temp = this.node.getChildByName("Towerbasic_button").getComponent(cc.Button);
            var temp_Sprite = new cc.SpriteFrame(realUrl);
            temp.normalSprite = temp_Sprite;
            temp.pressedSprite = temp_Sprite;
            temp.hoverSprite = temp_Sprite;
            //修改塔攻击范围
            this.SizeOfAttack = 1;
            this.RadiusOfAttack = this.SizeOfAttack * this.RadiusOfAttack
            //更改攻击圈图片大小
            this.node.getChildByName("attack_circle_standard").getChildByName("attack_circle_sprite").scale = this.SizeOfAttack;
        }
        //如果游戏暂停，禁用塔按钮
        else {
            this.SettingInteractableFalse();
        }
	},
    
	/*点击售卖*/
    On_sale_clicked: function () {
        //如果游戏未暂停
        if (this.IfPause() == false) {
            this.constructed = false;
            //更新塔基立绘
            var realUrl = cc.url.raw('texture/Tower/Tower_4.png');
            var temp = this.node.getChildByName("Towerbasic_button").getComponent(cc.Button);
            var temp_Sprite = new cc.SpriteFrame(realUrl);
            temp.normalSprite = temp_Sprite;
            temp.pressedSprite = temp_Sprite;

            realUrl = cc.url.raw('texture/Tower/Tower_3.png');
            temp_Sprite = new cc.SpriteFrame(realUrl);
            temp.hoverSprite = temp_Sprite;
            //重置攻击范围
            this.SizeOfAttack = 1;
            this.RadiusOfAttack = this.attack_circle.width / 2;
            //修改并隐藏攻击圈
            this.node.getChildByName("attack_circle_standard").getChildByName("attack_circle_sprite").scale = this.SizeOfAttack;
            this.RetractMenu();
        }
        //如果游戏暂停，禁用塔按钮
        else {
            this.SettingInteractableFalse();
        }
	},
	
	/*收回菜单*/
	RetractMenu:function(){
		//隐藏塔菜单、攻击圈
		this.menu.opacity=0;
		this.attack_circle.opacity=0;
        //禁用塔按钮
		this.SettingInteractableFalse();
	},
	
	/*判断是否暂停*/
	IfPause:function(){
	    var level = this.node.parent.parent.children[3];
		var pauseframe=level.children[4];
		if(pauseframe.opacity!=0)
			return true;
		else
			return false;
	},

    /*禁用塔按钮*/
    SettingInteractableFalse:function(){
        this.archer.children[0].getComponent(cc.Button).interactable = false;
        this.caster.children[0].getComponent(cc.Button).interactable = false;
        this.gunturret.children[0].getComponent(cc.Button).interactable = false;
        this.UpDate.children[0].getComponent(cc.Button).interactable = false;
        this.sale.children[0].getComponent(cc.Button).interactable = false;
	},
	
	/*收回其他塔的菜单*/
	ClickBackOtherTower:function(flag){
		let tower_all=this.node.parent;
		if(flag!=0){
			flag-=1;
			let TargetTower=tower_all.children[flag];
			let attack_circle=TargetTower.children[0];
			let menu=TargetTower.children[2];
			attack_circle.opacity=0;
				menu.opacity=0;
				//禁用塔按钮
				for(let i=1;i<6;i++)
					menu.children[i].children[0].getComponent(cc.Button).interactable=false;
		}
	},

	/*判断是否有其他塔显示菜单,返回值为第i+1个塔，返回0表示无塔显示菜单*/
	CheckOtherTower:function(){
		let tower_all=this.node.parent;
		for(let i=0;i<tower_all.children.length;i++){
			if(tower_all.children[i].children[2].opacity!=0)
			return i+1;
		}
		return 0;
	}
});

export default Tower;
