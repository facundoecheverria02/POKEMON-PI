import React from "react";
import loader from "../../img/loading-ok.gif";
import styles from "./cargando.module.css";


export default function Cargando(){

    return(
        <div>
           <img src={loader} className={styles.loader}></img>
        </div>
    )
}