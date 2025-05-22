import powers from '../data/powers';
export class Hero {
    constructor(name, powerId, age) {
        this.name = name;
        this.powerId = powerId;
        this.age = age;
    }
    get power() {
        var _a;
        return ((_a = powers.find(power => power.id === this.powerId)) === null || _a === void 0 ? void 0 : _a.desc) || 'not found';
    }
}
export class Hero2 {
}
export class Hero3 {
}
export class Hero4 {
}
export const PI = 3.1416;
export const miNombre = 'Fernando';
//# sourceMappingURL=Hero.js.map