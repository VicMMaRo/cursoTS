(() => {
    const victor = {
        name: 'Victor',
        surname: 'Maldonado Rodado',
        age: 37,
        nacionalidad: ['Español'],
        addres: {
            street: 'Calle 1',
            number: '16',
            city: 'Redondela'
        },
        telefono: [
            { type: 'home', number: '987654321', coInt: 34 },
            { number: '666943560', coInt: 34 },
        ],
        getCantidadContactos: () => { return victor.telefono.length; }
    };
    const sofia = {
        name: 'Sofia',
        surname: 'Cuntin Paz',
        addres: {
            street: 'Calle 3',
            number: '18'
        }
    };
    console.log(victor.telefono[0].number);
    console.log('Cantidad contactos: ', victor.getCantidadContactos());
    ;
})();
export {};
//# sourceMappingURL=app.js.map