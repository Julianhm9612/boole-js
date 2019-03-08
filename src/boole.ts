import { Boole } from './boole.class';

/**
 * 
 * @param paramGates 
 */
export function boole(paramGates: string): any {
    const _constant = 2;

    let errorTypeGates = (typeof paramGates == 'string') ? false : true;
 
    if(!errorTypeGates){
        // init objet
        let boole = new Boole(paramGates, [], 0);

        if(boole.gates.length == 4) {
            return true;
        }else if(boole.gates.length > 4) {
            boole.calcInputs(); // get uniques inputs and order it
            boole.calcInputsCount(_constant); // calc pow of inputs

            // let logicFunction = [];

            // ('((x^y)&(x^y))' || '').match(/[(]{1}[a-z]{1}[&|^]{1}[a-z]{1}[)]{1}|[&|^]{1}/g);
            // ('((x^y)&(x^y))&(x)' || '').match(/[(]+[a-z]{1}[&|^]{1}[a-z]{1}[)]+|[&|^]{1}/g);

            /**
             * Fill array of entries
             */
            var rows = boole.inputsCount;
            var table = Array.from({length: rows}, () => new Array(boole.inputs.length));
            var blocks = Array.from({length: boole.inputs.length}, (x, i) => Math.pow(_constant, i + 1)).reverse();
            var halfs = blocks.map(block => { return block/2 });
            for(var i=0;i < rows; i++){
                for(var j = 0; j < boole.inputs.length; j++){
                    table[i][j] = (i%blocks[j]) < halfs[j] ? 0 : 1;
                }
            }
            
            return table;
        }else {
            return 'Error! The length of the';
        }
    }
}