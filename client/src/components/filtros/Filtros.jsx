//Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {getTypes, filterType, filterDbApi} from "../../redux/actions/actions.js";
import styles from "./filtros.module.css";


export default function Filtros(){

    const dispatch = useDispatch();
    let types = useSelector((state) => state.types);

    useEffect(() =>{
        dispatch(getTypes())
    },[]);

    function selectionType(e){
        dispatch(filterType(e.target.value))

    }

    function selectionDbApi(e){
        dispatch(filterDbApi(e.target.value))
    }

    return(
        <div className={styles.contendor}>

            <select onChange={(e) =>selectionType(e)}>
            <option value="Todos">Types</option>
            
                {
                    
                    types.map(t =>{
                        return(<option value={t.name} key={t.id}>{t.name}</option>)
                    })
                }
                
               
            </select>

            <select onChange={(e) =>selectionDbApi(e)}>
                <option value="Todos">Todos</option>
                <option value="Api">API</option>
                <option value="Db">CREADOS</option>
        </select>
        </div>
    )
}