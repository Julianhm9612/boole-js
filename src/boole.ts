import { Boole } from './boole.class';

export function boole(paramGates: string) {
    const constant = 2;
    let inputs = paramGates.match(/([a-zA-Z]+)(?![\s\S]*\1)/g)!; // get uniques inputs
    let inputsCount = Math.pow(constant, inputs.length); // calc pow of inputs

    // init class
    let boole = new Boole(paramGates, inputs, inputsCount);

    return boole.inputsCount;
}