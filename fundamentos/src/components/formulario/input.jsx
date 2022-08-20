import "./Input.css";
import React, { useState } from "react";

export default (props) => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)//o valor q vem do evento 
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }} >
                <input value={valor} onChange={quandoMudar} />
                <input value={valor} readOnly /> 
                <input value={undefined} /> {/*Componente não controlado, não está associado a nenhum estado*/}             
            </div>
        </div>
    );
};

//target permite que você detecte quando uma função foi chamada.

//onChange é utilizado para que seja realizada determinada ação após alguma mudança.

//Readonly somente ler.
 