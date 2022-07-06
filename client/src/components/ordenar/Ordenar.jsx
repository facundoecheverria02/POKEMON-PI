//Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por ataque

import React from "react";
import {useDispatch} from "react-redux";
import { useState } from "react";
import {orderByAttack, orderByAz} from "../../redux/actions/actions.js";


export default function Ordenar(){

    const [valueSelect, setValueSelect] = useState("");

    const dispatch = useDispatch();

    function selectionAZ(e){
        e.preventDefault();
        setValueSelect(e.target.value);
        dispatch(orderByAz(e.target.value))
    }

    function selectionAttack(e){
        e.preventDefault();
        setValueSelect(e.target.value);
        dispatch(orderByAttack(e.target.value))

    }

    return(

        <div>
            <select onChange={(e) => selectionAZ(e)}>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
            
            <select onChange={(e) => selectionAttack(e)}>
                <option>Order Attack</option>
                <option value ="MAYOR">Mayor - Menor</option>
                <option value ="MENOR">Menor - Mayor</option>
            </select>

        
        </div>

        
    )
}