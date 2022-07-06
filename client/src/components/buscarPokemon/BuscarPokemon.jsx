//Input de búsqueda para encontrar pokemons por nombre (La búsqueda será exacta, es decir solo encontrará al pokemon si se coloca el nombre completo)

import React from "react";
import {findPokemon, getPokemons} from "../../redux/actions/actions.js";
import {useDispatch} from "react-redux";
import {useState} from "react";
import styles from "./buscarPokemon.module.css";



export default function BuscarPokemon(){

    const [input, setInput] = useState("");
    const dispatch = useDispatch()
   

    function capturarNombre(e){
        e.preventDefault();
        setInput(e.target.value)
    };

    function enviarNombre(e){
        e.preventDefault();
        dispatch(findPokemon(input.toLowerCase()))
    }

    function traerPokemons(e){
        e.preventDefault();
        dispatch(getPokemons());
    }



    return(
        <>
            

                <div className={styles.contenedor}>
                        <input type="text" placeholder="Nombre" onChange={(e) => capturarNombre(e)}></input>
                        <button type="button" onClick={(e) => enviarNombre(e)}>Buscar</button>
                        <button onClick={(e) => traerPokemons(e)}>Todos</button>
                </div>

              
        </>
    )
}