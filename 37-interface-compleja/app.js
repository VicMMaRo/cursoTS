import * as separadores from './separadores.js';
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
            { type: 'movil', number: '666943560', coInt: 34 }
        ]
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
    separadores.sepLargo();
    console.log('Ejercicio interface producto');
    let macarrones = {
        id: 1,
        name: 'macarrones',
        description: 'pasta de huevo casera',
        proveedor: [
            {
                id_proveedor: 1,
                name: 'gallo'
            },
            {
                id_proveedor: 2,
                name: 'hacendaño'
            }
        ],
        shops: [
            {
                codigo: 1,
                city: [
                    {
                        street: 'calle 2',
                        number: 4
                    },
                    {
                        street: 'calle 3',
                        number: 5
                    }
                ]
            }
        ]
    };
    console.log({ macarrones });
})();
//# sourceMappingURL=app.js.map