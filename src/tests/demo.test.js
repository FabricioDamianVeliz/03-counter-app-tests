
/*test('debe de ser true',()=>{

    const isActive=true;


    if(isActive){

        throw new Error('No esta activo');
    }

})*/

describe('Pruebas en el archivo demo.test.js',()=>{

    test('debe de ser iguales los string',()=>{

        //inicializacion
        const mensaje = 'Hola Mundo';
    
        //estimulo
        const mensaje2 = `Hola Mundo`;
    
        //observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    })

});

