import powers from '../data/powers';// importacion por defecto


export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ) {}

    get power():string { 
        //revisar el uso de ?. tenemos otro operador que es !. Investigar sobre ambos??
        return powers.find( power => power.id === this.powerId )?.desc || 'not found';
    }
}

export class Hero2 { }
export class Hero3 { }
export class Hero4 { }

export const PI = 3.1416;
export const miNombre = 'Fernando';