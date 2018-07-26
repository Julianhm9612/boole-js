export class Boole {
    public gates: string;
    public inputs: Array<any>;
    public inputsCount: number;
    constructor(gates: string, inputs: Array<any>, inputsCount: number) {
        this.gates = gates;
        this.inputs = inputs;
        this.inputsCount = inputsCount;
    }
}