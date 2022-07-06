import React from "react";
import { useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPokemons, deletePokemon} from "../../redux/actions/actions.js";
import {orderAz, orderAttack, filterdbApi, filtert} from "./functions.js"
import Card from "../card/Card.jsx";
import Paginado from "../paginado/Paginado.jsx"
import styles from "./cards.module.css";
import Cargando from "../cargando/Cargando.jsx";


 export default function Cards(){

    const dispatch = useDispatch();
    
    let allPokemons = useSelector((state) =>state.pokemons)
    let ordererAz = useSelector((state) => state.ordererAz)
    let ordererAttack = useSelector((state) => state.ordererAttack)
    let filterDbApi = useSelector((state) => state.filterDbApi)
    let filterType = useSelector((state) => state.filterType)
    let filtrados =[...allPokemons];
    let loading = useSelector((state) => state.loading);

    const [paginaActual, setPaginaActual] = useState(1);
    const [pokemonsPorPagina, setPokemonsPorPagina] = useState(12);
    const indiceUltimoPoke = paginaActual * pokemonsPorPagina;
    const indicePrimerPoke = indiceUltimoPoke - pokemonsPorPagina;
    //const pokemonsAct = filtrados.slice(indicePrimerPoke, indiceUltimoPoke)

    function paginado(pagina){
        setPaginaActual(pagina);
    }

    useEffect(()=>{
        console.log("allPokemons", allPokemons);
        if(allPokemons.length === 0){
            dispatch(getPokemons());
        }
       
    },[]);

    

    function aplicarFiltros(){
       

        if(ordererAz){
            filtrados = orderAz(ordererAz, filtrados)
        }

        if(ordererAttack){
            filtrados = orderAttack(ordererAttack, filtrados)
        }

        if(filterDbApi){
            filtrados = filterdbApi(filterDbApi, filtrados, allPokemons)
        }

        if(filterType){
            filtrados = filtert(filterType, filtrados)
        }

        console.log("filtrados",filtrados);

        return filtrados.slice(indicePrimerPoke, indiceUltimoPoke);
    }

    function eliminar(id){
        dispatch(deletePokemon(id));
        dispatch(getPokemons());
    }
    
   

    return(
        <div className={styles.contenedorGeneral}>

           <div className={styles.contPokemons}>
                {
                    loading ? <Cargando></Cargando>
                    
                    
                    : aplicarFiltros().map(p =>{
                        return(
                            <Card
                                key={p.id}
                                id={p.id}
                                name={p.name}
                                image={p.image}
                                types={p.types}
                                eliminar ={eliminar}
                            ></Card>
                        )
                    }) 
                    
                                 
                    
                }

                {
                    !loading && filtrados.length === 0 &&<h1>No se encontró</h1>
                }

        </div>
            
                
                {loading || <Paginado pokemonsPorPagina={pokemonsPorPagina} filtrados={filtrados.length} paginado={paginado}></Paginado>}
                
        </div>
    )

}

