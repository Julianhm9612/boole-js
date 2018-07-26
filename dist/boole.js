"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var boole_class_1 = require("./boole.class");
function boole(paramGates) {
    var constant = 2;
    var inputs = paramGates.match(/([a-zA-Z]+)(?![\s\S]*\1)/g);
    var inputsCount = Math.pow(constant, inputs.length);
    var boole = new boole_class_1.Boole(paramGates, inputs, inputsCount);
    return boole.inputsCount;
}
exports.boole = boole;
