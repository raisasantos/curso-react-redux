import "./Card.css";
import React from "react";

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
    }//color é a propriedade que eu passei no outro arquivo
    //Não usei background-color pq o ifém não pode ser usado em um nome de atributo ou objeto em javascript
    //Só recebe cor os cards que coloquei color, os demais não aparece então a cor padrão é #F00

    return ( 
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">{props.children}</div>
        </div>
    );
};