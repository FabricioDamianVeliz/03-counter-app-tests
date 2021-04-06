import React from 'react';
//import PrimeraApp from '../PrimeraApp';
//import {render} from '@testing-library/react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp/>',()=>{

    let wrapper = shallow(<CounterApp/>);

    beforeEach(()=>{

        wrapper = shallow(<CounterApp/>);
    })

    test('debe de mostrar <CounterApp/> correctamente',()=>{

       
        expect(wrapper).toMatchSnapshot();
      
    })

    test('debe de mostrar el valor por defecto de 100',()=>{

        const wrapper = shallow(<CounterApp numero={100}/>);

        const counterText = wrapper.find('h2').text().trim();

        expect(counterText).toBe('100');
      
    })

    test('debe de incrementar con el boton +1',()=>{

        wrapper.find('button').at(0).simulate('click');
        //console.log(btn1.html());
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('1');
      
    })

    test('debe de decrementar con el boton -1',()=>{


        wrapper.find('button').at(2).simulate('click');
        //console.log(btn1.html());
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('-1');
      
    })

    test('debe de colocar el valor por defecto con el btn reset',()=>{


        const wrapper = shallow(<CounterApp numero={105}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        //console.log(counterText);
        expect(counterText).toBe('105');
      
    })

})