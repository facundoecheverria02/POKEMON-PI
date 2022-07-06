import React from "react";
import {Link} from "react-router-dom";
import styles from "./card.module.css";

export default function Card({id, name, image, types, eliminar}){

    return(
        <div className={styles.contenedor}>

            {id.length > 6 ?<button onClick={(e) => eliminar(id)}>x</button> : null}
                <Link to={`/detalle/${id}`} className={styles.link}>
                    <div>
                        <p className={styles.name}>{name}</p>
                    </div>

                    <div className={styles.contenedorImg}>
                        <img src={image} alt={image} className={styles.image}></img>
                    </div>

                    <div>
                        <p className={styles.type}>{types.map(t=>{return(`-- ${t} ---`)})}</p>
                    </div>
                </Link>
        </div>
    )
}