import React from "react";
import Filtros from "../filtros/Filtros.jsx";
import Ordenar from "../ordenar/Ordenar.jsx";
import BuscarPokemon from "../buscarPokemon/BuscarPokemon.jsx";
import BorrarFiltros from "../borrarFiltros/BorrarFiltros.jsx";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import logo from "../../img/logo_pokemon.png";
import { useState } from "react";





export default function Nav(){

    const[menuActivo, setMenuActivo] = useState(false);

    return(
        <div className={styles.contenedor}>
            
             <img src={logo} className={styles.logo} alt="Imagen no encontrada"/>
            
            
           <div className={styles.contenedorZonaFiltros}>
                <button onClick={() =>setMenuActivo(menuActivo ? false : true)} className={styles.boton}>Menú</button>
                
                {
                    
                    menuActivo ?
                        <div>
                        
                                            
                            <div className={styles.zonaFiltros}>
                                
                                <Link to="/crear"> <button>Crea un Pokémon</button></Link>

                                <label>Ordenamientos</label>
                                <Ordenar></Ordenar>

                                <label>Filtros</label>
                                <Filtros></Filtros>

                                <BorrarFiltros></BorrarFiltros>
                                <label>Busca un Pokémon</label>
                                <BuscarPokemon></BuscarPokemon>

                                
                            </div>
                        </div>
                    : null
                    
                 }

            </div>  
        </div>
    )
}