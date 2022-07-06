import React from "react";
import styles from "./paginado.module.css";

export default function Paginado({pokemonsPorPagina, filtrados, paginado}){

    const numeroPaginas=[];

    for(let i=1; i<= Math.ceil(filtrados/pokemonsPorPagina); i++){
        numeroPaginas.push(i)
    }

    return(
        <div className={styles.contenedor}>
            <div className={styles.lista}>
                {
                    numeroPaginas.length >0 && numeroPaginas.map(n =>{
                        return(
                            <>
                           
                            <div key={n} className={styles.item} >
                                <button onClick={(e) => paginado(n)} className={styles.boton} key={n}>{n}</button>

                            </div>
                            </>
                        )
                    })
                }
            </div>

        </div>
    )

}

