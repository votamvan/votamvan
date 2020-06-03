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
        console.log(mbike.hasOwnProperty('speed'));
        bike.applyBrake(5);
        console.log("bike.speed = " + bike.speed);
        console.log("mbike.speed = " + mbike.speed);
        mbike.setGear(5);
        console.log("mbike.gear = " + mbike.gear);
    };

    start();
})();

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

window.onload = function() {
    var sourceOptElem = document.getElementById("sourceOpt");
    var sourceTxtElem = document.getElementById("sourceTxt");
    var outputTxtElem = document.getElementById("outputTxt");
    sourceTxtElem.value = MODULE_SOURCE;
    outputTxtElem.value = MODULE_OUTPUT;
    sourceOptElem.onchange = function() {
        if (sourceOptElem.value == "module") {
            sourceTxtElem.value = MODULE_SOURCE;
            outputTxtElem.value = MODULE_OUTPUT;
        }else {
            sourceTxtElem.value = ES6_SOURCE;
            outputTxtElem.value = ES6_OUTPUT;
        }
    };
};