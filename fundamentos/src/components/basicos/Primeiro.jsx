import React from "react"; //Precisei impoeta porque estou usando o jsx

export default function Primeiro() {
    const msg = "Seja bem vindo(a)!";
    return (
        <div>
            <h2>Primeiro Component</h2>
            <p>{msg}</p>
        </div>
    );
}