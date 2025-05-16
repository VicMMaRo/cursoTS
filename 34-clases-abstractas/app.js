import * as separadores from './separadores.js';
(() => {
    const productos = [
        {
            nombre: 'patata',
            precioCompra: 0.5,
            precioVenta: 1.2,
            oferta: 0,
            existencias: 1000
        },
        {
            nombre: 'tomate',
            precioCompra: 0.6,
            precioVenta: 1.4,
            oferta: 0,
            existencias: 400
        },
        {
            nombre: 'manzana',
            precioCompra: 0.8,
            precioVenta: 2,
            oferta: 0,
            existencias: 1500
        }
    ];
    class Producto {
        constructor(nombre, precioCompra, precioVenta, oferta, existencias) {
            this.nombre = nombre;
            this.precioCompra = precioCompra;
            this.precioVenta = precioVenta;
            this.oferta = oferta;
            this.existencias = existencias;
        }
        calcularGanancia() {
            return (this.precioVenta - this.precioCompra) * this.existencias;
        }
    }
    class ProductoHijo extends Producto {
        constructor(nombre, precioCompra, precioVenta, oferta, existencias) {
            super(nombre, precioCompra, precioVenta, oferta, existencias);
        }
        calcularOferta() {
            if (this.existencias > 500) {
                this.oferta = this.precioVenta * 0.9;
            }
        }
    }
    class ProductoNieto extends ProductoHijo {
        constructor(nombre, precioCompra, precioVenta, oferta, existencias) {
            super(nombre, precioCompra, precioVenta, oferta, existencias);
        }
    }
    const productoNieto = new ProductoNieto("Platano", 1.50, 2.00, 0, 1200);
    console.log(productoNieto);
    let ganancia = productoNieto.calcularGanancia();
    console.log(ganancia);
    productoNieto.calcularOferta();
    console.log('El precio de oferta es', productoNieto.oferta);
    console.log(productoNieto);
    productos.push(productoNieto);
    console.log(productos);
    separadores.sepLargo();
    console.log('Ejercicio calculadora');
    class sumar {
        constructor(num1, num2) {
            this.num1 = num1;
            this.num2 = num2;
        }
        get numeros() {
            return [this.num1, this.num2];
        }
        sumar() {
            return this.num1 + this.num2;
        }
    }
})();
//# sourceMappingURL=app.js.map