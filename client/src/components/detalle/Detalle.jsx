import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import { useEffect } from "react";
import {getDetail} from "../../redux/actions/actions.js"
import { Link } from "react-router-dom";
import styles from "./detalle.module.css";
import image from "../../img/flecha2.png";
import Cargando from "../cargando/Cargando.jsx";



export default function Detalle(){

    const {id} = useParams()
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.detail);
    const loading = useSelector((state) => state.loading);

    useEffect(()=>{
        dispatch(getDetail(id))
    },[]);

    function reiniciar(){
        dispatch(getDetail(""))
    }

      

    return(
        
        <>
            {
                loading? 
                    <Cargando></Cargando>

               : <div className={styles.contenedor}>
            
            
                    <div className={styles.contenedorInfo}>
                        <p className={styles.name}>{detail.name}</p>
                        
                    
                            
                            {
                                <div>
                                    {detail.stats?.map(s=>{
                                        if(s.name === "hp" || s.name === "attack" || s.name === "defense" || s.name === "speed"){
                                            return  (<p>{`${s.name.toUpperCase()}: ${s.value}`}</p>)
                                        }else{
                                            return null
                                        }

                                    })
                                }
                                    
                                </div>
                            }

                            
                            
                            <p>{`ID: ${detail.id}`}</p>
                            <p>{`HEIGHT: ${detail.height}`}</p>
                            <p>{`WEIGHT: ${detail.weight}`}</p>
                            <p>{"TYPES: " + detail.types?.map(t => {return t.toUpperCase() })}</p>

                            <Link to="/home" className={styles.link} onClick={(e)=> reiniciar()}><img src={image} className={styles.flechaImg}/></Link>

                    </div>

                    <div className={styles.contenedorImg}>
                        <img src={detail.image} className={styles.image} alt="Imagen no encontrada"></img>
                    </div>
                    
                </div>
            }
        </>
    )
}