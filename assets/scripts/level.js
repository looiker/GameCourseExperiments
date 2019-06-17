import global from "./global"
var level = cc.Class({
    extends: cc.Component,
    properties: {
        clickBack:cc.Node,
        background:cc.Node,
        map_ui_Prefab:cc.Prefab,
        tower_ALL:cc.Node,
        enemy_ALL:cc.Node,
        enemyPathNodes: {
          default: [],
          type: cc.Node
      },
        enemyPrefab: {
        default: null,
        type: cc.Prefab
    },
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
<<<<<<< HEAD
        //调整map_ui在子节点中顺序，保证Tower的按钮在其上方
        map_ui.setSiblingIndex(2);
=======
        global.event.on("game_start",this.gameStart.bind(this));
        this.currentWaveCount = 0;
        this.currentEnemyCount = 0;
        this.addEnemyCurrentTime = 0;
        this.addWaveCurrentTime = 0;
        this.enemyNodeList = [];
        this.bulletNodeList = [];

>>>>>>> 188b61e04e7d9fb2c970c43bf505edb43c6905b0
    },
    /**
     * 游戏开始
     */
    gameStart: function () {
      cc.loader.loadRes("./config/level_config",  (err, result)=> {
          if (err){
              cc.log("load config " + err);
          }else {
              cc.log("22" + JSON.stringify(result));
              let allLevels = result.json.level_1;
              this.levelConfig = allLevels;
          }
          //let config = result["level_1"];
          //self.levelConfig = config;
          // this.currentWaveConfig = wavesConfig[0];
      });
    },
    //增加敌人函数
    addEnemy: function (type) {
    cc.log("add Enemy" + this.currentEnemyCount);
    cc.log("add Wave " + this.currentWaveCount)
    let enemy = cc.instantiate(this.enemyPrefab);
    enemy.getComponent("enemy").initWithData(type, this.enemyPathNodes);
    enemy.parent = this.node;
    this.enemyNodeList.push(enemy);
    },
  // 更新函数
    update: function (dt) {
    if (this.currentWaveConfig){
        if (this.addEnemyCurrentTime > this.currentWaveConfig.dtt){
            this.addEnemyCurrentTime = 0;
            this.currentEnemyCount ++;
            this.addEnemy(this.currentWaveConfig.type);
            if (this.currentEnemyCount === this.currentWaveConfig.count){
                this.currentWaveConfig = undefined;
                this.currentEnemyCount = 0;
            }
        }
        else {
            this.addEnemyCurrentTime += dt;
        }
    }else {
        if(this.levelConfig)
        {
            //cc.log("123");
            if(this.addWaveCurrentTime > this.levelConfig.dt) {
            this.currentWaveConfig = this.levelConfig.waves[this.currentWaveCount];
            if (this.currentWaveCount < this.levelConfig.waves.length) {
                this.currentWaveCount++;
            } else {
                this.currentWaveConfig = undefined;
            }
            this.addWaveCurrentTime = 0;
        } else {
            this.addWaveCurrentTime += dt;
        }
        }else
        {
           // cc.log("456");
        }
    }

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