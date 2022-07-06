
export function orderAz(valor, array){
    let ordered ="";

    if(valor === "A-Z"){
        ordered = array.sort((poke1, poke2) =>{
            if(poke1.name > poke2.name){
                return 1;
            }else if(poke1.name < poke2.name){
                return -1;
            }else{
                return 0;
            }
        })
    }else if(valor === "Z-A"){
        ordered = array.sort((poke1 ,poke2) =>{
            if(poke2.name > poke1.name){
                return 1;
            }else if(poke2.name < poke1.name){
                return -1;
            }else{
                return 0;
            }
        })
    }

    return ordered;

}

export function orderAttack(valor, array){
    
    let orderedA = "";
            if(valor === "MENOR"){
                orderedA = array.sort((poke1, poke2) =>{
                    if(poke1.stats[1].attack > poke2.stats[1].attack){
                        return 1;
                    }else if(poke1.stats[1].attack < poke2.stats[1].attack){
                        return -1;
                    }else{
                        return 0;
                    }
                }) 
            }else if(valor === "MAYOR"){
                orderedA = array.sort((poke1, poke2) =>{
                    if(poke2.stats[1].attack > poke1.stats[1].attack){
                        return 1;
                    }else if(poke2.stats[1].attack < poke1.stats[1].attack){
                        return -1;
                    }else{
                        return -1;
                    }
            })
        }

        return orderedA
}


export function filterdbApi(valor, array, allPokemons){
   
     let filterDbApi ="";

     if(valor === "Todos"){
        filterDbApi = allPokemons;
    }else if(valor === "Api"){
        filterDbApi = array.filter(p => p.id.toString().length < 6)
     }else if(valor === "Db"){
        filterDbApi = array.filter(p => p.id.length > 6)
    }

    return filterDbApi
}

export function filtert(valor, array){
    
    return array.filter(p => p.types.includes(valor))
}