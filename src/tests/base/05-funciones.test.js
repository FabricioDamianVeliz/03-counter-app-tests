import { getUser, getUsuarioActivo } from "../../base/05-funciones"
import '@testing-library/jest-dom'

describe('Pruebas en 05-funciones',()=>{

    test('getUser debe de retornar un objeto',()=>{

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        //console.log(user);

        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo debe de retornar un objeto',()=>{

        const userTest2 = {
            uid: 'ABC567',
            username: 'Fabricio'
        }
        
        const nombre = 'Fabricio';

        const user = getUsuarioActivo(nombre);

        //console.log(user);

        expect(user).toEqual(userTest2);

    })
})

