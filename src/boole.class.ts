export class Boole {
    public gates: string;
    public inputs: Array<any>;
    public inputsCount: number;
    constructor(gates: string, inputs: Array<any>, inputsCount: number) {
        this.gates = gates;
        this.inputs = inputs;
        this.inputsCount = inputsCount;
    }
    /**
     * 
     */
    public calcInputs() {
        this.inputs = this.gates.match(/([a-zA-Z]+)(?![\s\S]*\1)/g).sort() || [];
    }
    /**
     * 
     * @param paramConstant 
     */
    public calcInputsCount(paramConstant: number) {
        this.inputsCount = Math.pow(paramConstant, this.inputs.length) || 0;
    }
}