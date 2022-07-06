import React, {useEffect, useState} from "react";
import {getTypes, createPokemon} from  "../../redux/actions/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./crear.module.css";
import image from "../../img/flecha2.png";
import {validarErrores} from "./functions.js"




export default function Crear(){

    const allTypes = useSelector((state) => state.types)
    const dispatch = useDispatch();

    const [input, setInput] = useState(
        {
            name: "",
            image: "",
            types: [],
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: ""
        }
    )

    const [error, setError] = useState({})

    useEffect(() =>{
        dispatch(getTypes());
    }, [])


    function capturarInputs(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        setError(validarErrores({
            ...input,
            [e.target.value]: e.target.value
        }))

    }

    function capSelectTypes(e){
        
       if(!input.types.includes(e.target.value)){
        setInput({
            ...input,
            types:[...input.types, e.target.value]
        }) 
       }else{
           alert("no puede selecionar dos tipos iguales")
       }
           
        
        
        setError(validarErrores({
            ...input,
            types: e.target.value
        }))

    }

    function deleteTypes(type){
        setInput({
            ...input,
            types: input.types.filter(t => t !== type)
        })
    }

    function enviarInfo(e){
        e.preventDefault();
        dispatch(createPokemon(input));
        alert("Pokémon creado correctamente");
        setInput(
            {
                name: "",
                image: "",
                types: [],
                hp: "",
                attack: "",
                defense: "",
                speed: "",
                height: "",
                weight: ""
            }
        )
    }

   
    return(
        <div className={styles.contenedor}>
            <Link to="/home" className={styles.link}><img src={image} className={styles.flechaImg}/></Link>
            

            <form onSubmit={(e) => enviarInfo(e)} className={styles.formulario}>
                <h2>Crea tu Pokémon</h2>
                <input  value={input.name} name="name" placeholder="Name" onChange={(e) => capturarInputs(e)}></input>
                
                {error.name? <p>{error.name}</p> :null}

                <input type="text" value={input.image} name="image" placeholder="Image" onChange={(e) => capturarInputs(e)}></input>
                {error.image? <p>{error.image}</p> :null}
                              
                
                              
                <input value={input.hp} name="hp" placeholder="hp" onChange={(e) => capturarInputs(e)}></input>
                {error.hp? <p>{error.hp}</p> :null}

                <input value={input.attack} name="attack" placeholder="Attack" onChange={(e) => capturarInputs(e)}></input>
                {error.attack? <p>{error.attack}</p> :null}

                <input value={input.defense} name="defense" placeholder="Defense" onChange={(e) => capturarInputs(e)}></input>
                {error.defense? <p>{error.defense}</p> :null}
                
                <input value={input.speed} name="speed" placeholder="Speed" onChange={(e) => capturarInputs(e)}></input>
                {error.speed? <p>{error.speed}</p> :null}
                
                <input value={input.height} name="height" placeholder="Height" onChange={(e) => capturarInputs(e)}></input>
                {error.height? <p>{error.height}</p> :null}
                
                <input value={input.weight} name="weight" placeholder="Weight" onChange={(e) => capturarInputs(e)}></input>
                {error.weight? <p>{error.weight}</p> :null}
                
                <div>
                <select value={input.types} onChange={(e) => capSelectTypes(e)}>
                    {
                        allTypes.map(t => {
                            return(<option value={t.name} key={t.id}>{t.name}</option>)
                        })
                    }
                </select>

                {
                    error.types? 
                        <p>{error.types}</p> 
                
                    :<div>
                        {
                            input.types.map(t =>{
                               return (
                                    <div>
                                        <p>{t}</p>
                                        <button type="button" onClick={() => deleteTypes(t)}>x</button>
                                    </div>
                                    )

                            })
                        }
                    </div>
                }
                </div>
                <button type="submit" disabled={Object.keys(error).length < 1 ? false : true}>Crear</button>

            </form>
            
        </div>
    )
}