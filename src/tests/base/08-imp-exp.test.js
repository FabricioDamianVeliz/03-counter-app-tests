import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heoes";

describe('Pruebas en funciones de heroes',()=>{

    test('Debe de retornar un heroe por id',()=>{

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id===id);

        expect(heroe).toEqual(heroeData);

        //console.log(heroe);
    })

    test('Debe de retornar un undefined si heroe no existe',()=>{

        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

        //console.log(heroe);
    })

    test('Debe de retornar un arreglo con los heroes de DC',()=>{

        const owner = 'DC';
        const arr = getHeroesByOwner(owner);

        const heroeData = heroes.filter(a => a.owner===owner);

        expect(arr).toEqual(heroeData);

        //console.log(arr);
    })

    test('Debe de retornar un arreglo con los heroes de Marvel',()=>{

        const owner = 'Marvel';
        const arr = getHeroesByOwner(owner);

        expect(arr.length).toBe(2);

        //console.log(arr);
    })

   
})