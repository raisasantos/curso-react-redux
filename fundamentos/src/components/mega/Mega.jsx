import "./Mega.css";
import React, { useState } from "react";

export default (props) => {

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ?
            gerarNumeroNaoContido(min, max, array) : aleatorio
    }
    
    function gerarNumeros(qtde) {
        const numeros = Array(qtde)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            return [ ...nums, novoNumero ]
        }, [])
        .sort((n1, n2) => n1 - n2) 
        //Ordem crescente
    
        return numeros
    }    
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = gerarNumeros(qtde)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className="Mega" >
            <h2>Mega</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Qtde de Números</label> 
                <input 
                min="6"
                max="15"
                type="number" 
                value={qtde} 
                onChange={(e) => {
                    setQtde(+e.target.value)
                    setNumeros(gerarNumeros(+e.target.value))
                }}
            />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Número</button>
        </div>
    );
};

/* O que é ?

- Join() Os elementos da string serão separados por um separador especificado, podendo ser (, ) ( - ) (' ')...

- O método includes() determina se um array/objeto contém um determinado elemento ou não, retornando true ou false 

- fill() "preenche todos os valores do array" a partir do índice inicial a um índice final com um valor estático.

- reduce() busca reduzir um array. Ele iterará por cada elemento dessa lista com o objetivo de ao final gerar um único valor (de qualquer tipo), como por exemplo a soma de todos os elementos desse array. Lembrando que não ficamos presos apenas a números.
*/


/* Tem essa forma de fazer também
function gerarNumeroNaoContido(array) {
    let numAle = Math.floor(Math.random() * (60) + 1)
    return array.includes(numAle) ? 
    gerarNumeroNaoContido(array):
    numAle
}
 
function gerarNumeros(qtde) {
    let nuns = []
    for (let i = 1; i <= qtde; i++) {nuns.push(gerarNumeroNaoContido(nuns))}
    return nuns
}
 
console.log(gerarNumeros(7))
*/


