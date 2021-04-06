import React, {useState} from 'react';
import PropTypes from 'prop-types';

// rafcp

const CounterApp = ({numero=0}) => {

    const [counter,setCounter] = useState(numero);


    const titulo = 'CounterApp';

    const handleAdd = () => {

        setCounter(counter+1);
        //setCounter((c)=>c+1);
    }

    const decremento = () => {

        setCounter(counter-1);
    }

    const reseteo = () => {

        setCounter(numero);
    }

    return(

        <>
            <h1>{titulo}</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={reseteo}>Reset</button>
            <button onClick={decremento}>-1</button>
        </>

    );
}

CounterApp.propTypes = {
    numeSro: PropTypes.number
}

export default CounterApp;