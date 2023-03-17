import { useState } from 'react';
import TextField from '@mui/material/TextField';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    //Actualizo el nuevo valor del input
    const onInputChange = (event) => {
        console.log(event.target.value);
        setinputValue(event.target.value);//capturo el nuevo valor del input
    };


    //Cancela el evento de submit
    const onSubmit = (event) => {

        event.preventDefault();

        const valorInput = inputValue.trim();//valor que escribe sin espacio

        if (valorInput.length <= 1) return;

        //llamo al valor
        onNewCategory(valorInput); //le paso el parametro "valor", a la funcion

        //limpio el input
        setinputValue('');
    };

    return (
        <form onSubmit={onSubmit} >
            <TextField
                value={inputValue} //valor del input
                onChange={onInputChange} //escucha el cambio
                id="filled-basic"
                label="Buscar gifs"
                variant="filled"
                className='input'
                type="text"
                placeholder="Buscar gifs"
            />


        </form>
    )
}












//Otra forma de capturar el valor del input sin usar en cada parte el event
// es desestructurar y usar el {target}



/* export const AddCategory = () => {

    const [inputValue, setinputValue] = useState('One Punch');

    const onInputChange = ({target}) => {  //ACA DESESTRUCTURA EL TARGET Y SIEMPRE RECIBO EL EVENT
        console.log(target.value);
        setinputValue(target.value);

    };

    return (
        <>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </>
    )
} */













/* ---------------------------------------------------- */

/* ------ El event del DOM ------

Para conocer el tipo de evento que se esta ejecutando, paso el parametro e o event
//o el objetivo ... e.target

function onNewClick(event) {
    .......
}

*/
