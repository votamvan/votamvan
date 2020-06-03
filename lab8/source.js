var MODULE_SOURCE = `
(function () {
    "use strict";

    var createBicyclePrototye = function(){
        return {
            speed: 0,
            applyBrake: function(value) {
                this.speed -= value;
            },
            speedUp:  function(value) {
                this.speed += value;
            }
        };
    };

    var createMountainBikeProtoype = function(prototype) {
        var obj = Object.create(prototype);
        obj.gear = 1;
        obj.setGear = function(value) {this.gear = value;};
        return obj;
    };

    var start = function() {
        var bike = createBicyclePrototye();
        var mbike = createMountainBikeProtoype(bike);
        console.log("bike.speed = " + bike.speed);
        console.log("mbike.speed = " + mbike.speed);
        bike.speedUp(15);
        console.log("bike.speed = " + bike.speed);
        console.log("mbike.speed = " + mbike.speed);
        console.log("mbike.hasOwnProperty('speed') = " + mbike.hasOwnProperty('speed'));
        bike.applyBrake(5);
        console.log("bike.speed = " + bike.speed);
        console.log("mbike.speed = " + mbike.speed);
        mbike.setGear(5);
        console.log("mbike.gear = " + mbike.gear);
    };

    start();
})();
`;

var ES6_SOURCE = `
(function () {
    "use strict";

    function Bike() {
        this.speed = 0;
    }

    Bike.prototype.applyBrake = function(value) {
        this.speed -= value;
    };

    Bike.prototype.speedUp = function(value) {
        this.speed += value;
    };

    function MBike() {
        Bike.call(this);
        this.gear = 1;
    }

    MBike.prototype = Object.create(Bike.prototype);
    MBike.prototype.constructor = MBike;
    MBike.prototype.setGear = function(gear){
        this.gear = gear;
    };

    var start = function() {
        var bike = new Bike();
        console.log(bike);
        var mbike = new MBike();
        console.log(mbike);
        mbike.speedUp(5);
        mbike.setGear(3);
        console.log("mbike.speed = " + mbike.speed);
        console.log("mbike.gear = " + mbike.gear);
        console.log(mbike instanceof MBike);
        console.log(mbike instanceof Bike);
        console.log(bike.constructor);
        console.log(mbike.constructor);
    };

    start();
})();
`;

var MODULE_OUTPUT = `
bike.speed = 0
mbike.speed = 0
bike.speed = 15
mbike.speed = 15
false
bike.speed = 10
mbike.speed = 10
mbike.gear = 5
`;

var ES6_OUTPUT = `
[object Object] {
    applyBrake: function(value) {
          this.speed -= value;
      },
    speed: 0,
    speedUp: function(value) {
          this.speed += value;
      }
}
[object Object] {
    applyBrake: function(value) {
        this.speed -= value;
    },
    constructor: function MBike() {
        Bike.call(this);
        this.gear = 1;
    },
    gear: 1,
    setGear: function(gear){
        this.gear = gear;
    },
    speed: 0,
    speedUp: function(value) {
        this.speed += value;
    }
}
mbike.speed = 5
mbike.gear = 3
true
true
function Bike() {
    this.speed = 0;
}
function MBike() {
    Bike.call(this);
    this.gear = 1;
}
`;