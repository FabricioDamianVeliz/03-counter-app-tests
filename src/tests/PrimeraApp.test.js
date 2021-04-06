import React from 'react';
import PrimeraApp from '../PrimeraApp';
//import {render} from '@testing-library/react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Pruebas en <PrimeraApp/>',()=>{

    /*test('debe de mostrar el mensaje "Hola"',()=>{

        const saludo = 'Hola';

        const {getByText} = render(<PrimeraApp saludo={saludo}/>);

        expect(getByText(saludo)).toBeInTheDocument();
      
    })*/

    test('debe de mostrar <PrimeraApp/> correctamente',()=>{

        const saludo = 'Hola';
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
        expect(wrapper).toMatchSnapshot();
      
    })

    test('debe de mostrar el subtitulo enviado por props',()=>{

        const saludo = 'Hola';
        const subtitulo = 'Subtitulo';

        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );
        
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo);
      
    })



})




