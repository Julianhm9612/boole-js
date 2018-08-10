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

            // for (let entry of boole.inputs) {
            //     console.log(entry);
            // }

            /**
             * Fill array of entries
             */
            // var n = ["x", "y", "z"].length;
            // var rows = Math.pow(2, n);
            // var table = Array.from({length: rows}, () => new Array(n));
            // var blocks = Array.from({length: n}, (x, i) => Math.pow(2, i + 1)).reverse();
            // var halfs = blocks.map(block => { return block/2 });
            // for(var i=0;i < rows; i++){
                // for(var j = 0; j < n; j++){
                    // table[i][j] = (i%blocks[j]) < halfs[j] ? 0 : 1;
                // }
            // }
            // console.log(table);
            
            return boole.inputsCount;
            // return eval(boole.gates);
        }else {
            return 'Error! The length of the';
        }
    }
}