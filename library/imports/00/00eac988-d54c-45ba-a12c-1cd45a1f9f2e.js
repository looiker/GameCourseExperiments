"use strict";
cc._RF.push(module, '00eacmI1UxFuqEsHNRaH58u', 'enemy');
// scripts/enemy.js

"use strict";

var EnemyState = {
    Invalid: -1,
    Running: 1,
    EndPath: 2,
    Dead: 3
};
cc.Class({
    extends: cc.Component,

    properties: {
        spriteFrames: {
            default: [],
            type: cc.SpriteFrame
        },
        spriteNode: {
            default: null,
            type: cc.Sprite
        }
    },

    onLoad: function onLoad() {
        this.state = EnemyState.Invalid;
        this.node.opacity = 0;
        this.direction = cc.p(0, 0);
        this.currentPathPointCount = 0;
        this.currentHealthCount = 0;
        this.totalHealthCount = 1;
    },
    //初始化函数
    initWithData: function initWithData(type, pathPoints) {
        var _this = this;

        //0 - 6
        this.spriteNode.spriteFrame = this.spriteFrames[type];
        this.pathPoints = pathPoints;
        this.node.position = pathPoints[0].position;
        cc.loader.loadRes("./config/monster_config", function (err, result) {
            if (err) {
                cc.log(err);
            } else {
                // cc.log("enemy result = " + JSON.stringify(result));
                cc.log("canrun");
                var config = result.json["enemy_" + type];
                cc.log(JSON.stringify(result.json.enemy_0));
                _this.speed = config.speed;
                cc.log("can1run");
                _this.currentHealthCount = config.health;
                _this.totalHealthCount = config.health;
                _this.setState(EnemyState.Running);
            }
        });
    },
    update: function update(dt) {
        if (this.state === EnemyState.Running) {
            var distance = this.node.position.sub(this.pathPoints[this.currentPathPointCount].position).mag();
            if (distance < 10) {
                this.currentPathPointCount++;
                if (this.currentPathPointCount === this.pathPoints.length) {
                    this.setState(EnemyState.EndPath);
                    return;
                }
                this.direction = this.pathPoints[this.currentPathPointCount].position.sub(this.node.position).normalize();
            } else {

                this.node.position = this.node.position.add(this.direction.mul(this.speed * dt));
            }
        }
        //this.healthProgressBar.progress = this.currentHealthCount / this.totalHealthCount;
    },
    setState: function setState(state) {
        var _this2 = this;

        if (this.state === state) {
            return;
        }
        switch (state) {
            case EnemyState.Running:
                this.node.opacity = 255;
                break;
            case EnemyState.Dead:
                var action = cc.fadeOut(1);
                var sequence = cc.sequence(action, cc.callFunc(function () {
                    cc.log("死了");
                    _this2.node.destroy();
                }));
                this.node.runAction(sequence);

                break;
            case EnemyState.EndPath:
                break;
            default:
                break;
        }
        this.state = state;
    }

});

cc._RF.pop();