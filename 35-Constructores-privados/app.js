(() => {
    class FullName {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
    }
    const victor = new FullName('Victor', 'Maldonado Rodado');
    console.log(victor);
    class FullName2 {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }
        static callFullName(name, surname) {
            if (!FullName2.instance) {
                FullName2.instance = new FullName2(name, surname);
            }
            else {
                console.log('La instancia de fullName2 ya está creada');
            }
            return FullName2.instance;
        }
        static changeName(name) {
            FullName2.instance.name = name;
        }
    }
    let sofia = FullName2.callFullName('Sofia', 'Cuntin Paz');
    console.log('Primera instancia', sofia);
    const manolo = FullName2.callFullName('Manolo', 'Rodado De la Fuente');
    console.log('segunda instancia', manolo);
    FullName2.changeName('Manolo');
    console.log('Nombre cambiado', sofia);
})();
export {};
//# sourceMappingURL=app.js.map