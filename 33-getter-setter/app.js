(() => {
    class Vehiculo {
        constructor(marca, modelo, matricula, automatico) {
            this.marca = marca;
            this.modelo = modelo;
            this.matricula = matricula;
            this.automatico = automatico;
        }
        get getMarca() {
            return this.marca;
        }
        get getModelo() {
            return this.modelo;
            ;
        }
        set setMarca(marca) {
            this.marca = marca;
        }
        set setModelo(modelo) {
            this.modelo = modelo;
        }
    }
    const renault = new Vehiculo('Renault', 'Clio', '1234-gvb', true);
    console.log({ renault });
    renault.setMarca = 'Fiat';
    console.log(renault.getMarca);
    renault.setModelo = 'Punto';
    console.log(renault.getModelo);
})();
export {};
//# sourceMappingURL=app.js.map