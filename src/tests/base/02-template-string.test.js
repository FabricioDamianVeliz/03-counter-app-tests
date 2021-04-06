import { getSaludo } from "../../base/02-template-string";

import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string.test.js',()=>{

    test('getSaludo debe de retornar Hola Fabricio!',()=>{

        const nombre = 'Fabricio';

        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola ' + nombre +'!');

        //console.log(saludo)
    })

    test('getSaludo debe de retornar Hola Carlos! si no hay argumento nombre',()=>{

        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos!');

        //console.log(saludo)
    })
})