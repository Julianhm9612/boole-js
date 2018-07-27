import { Boole } from './boole.class';

/**
 * 
 * @param paramGates 
 */
export function boole(paramGates: string) {
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

            return boole.inputsCount;
            // return eval(boole.gates);
        }else {
            return 'Error! The length of the';
        }
    }
}