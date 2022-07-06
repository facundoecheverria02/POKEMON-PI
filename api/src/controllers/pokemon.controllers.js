const {Pokemon} = require('../db.js');
const {Type} = require('../db.js');
const axios = require('axios');
const { Op } = require("sequelize");

async function getPokemonsApi(){
   
        const api = await axios("https://pokeapi.co/api/v2/pokemon");
        const api2 = await axios('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
        const results = [... api.data.results, ... api2.data.results];
        let listPoke=[]
        
        for(let res of results){
            
            let urlPoke = res.url;
           
            let response = await axios(`${urlPoke}`);
            listPoke.push({
                id: response.data.id,
                name: response.data.name.toUpperCase(),
                image: response.data.sprites.other.dream_world.front_default,
                stats: response.data.stats.map(s =>{
                    return {
                        [s.stat.name]: s.base_stat

                    }
                }),
                types: response.data.types.map(t => {
                    return t.type.name
                }),
                height: response.data.height,
                weight: response.data.weight

            })
          
        }

        

        return listPoke;

    
}

async function getPokemonDb(){

   const db = await Pokemon.findAll({
        include: [{
            model: Type,
            attributes:['name'],
        }]
    }) 

    
    let pokemonsDb=[]
       db.map(p =>{
          
        pokemonsDb.push({
               
                id: p.dataValues.id,
                name: p.dataValues.name.toUpperCase(),
                image: p.dataValues.image,
                stats: [
                {hp: p.dataValues.hp},
                {attack: p.dataValues.attack},
                {defense: p.dataValues.defense},
                {speed: p.dataValues.speed}

                ],
            
                types: p.dataValues.types.map(t =>{
                 return t.name;
                }),
                 height: p.dataValues.height,
                weight: p.dataValues.weight
            })
        })
        
    return pokemonsDb;
}

async function allPokemons(){
    const apiInfo =  await getPokemonsApi();
    const dbInfo = await getPokemonDb();
    const allInfo = apiInfo.concat(dbInfo);
  
    return allInfo;
}

async function getDetailPokeapi(id){
    const api = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const pokemon = {
                id: api.data.id,
                name: api.data.name.toUpperCase(),
                image: api.data.sprites.other.dream_world.front_default,
                stats: api.data.stats.map(s =>{
                    return {
                           
                            name: s.stat.name,
                            value: s.base_stat
                    }
                }),
                types: api.data.types.map(t => {
                    return t.type.name
                }),
                height: api.data.height,
                weight: api.data.weight
    }

    return pokemon;
}

async function getDetailPokeDb(id){

    const pokemonsDb = await Pokemon.findByPk(id,{
         include: [{
             model: Type,
             attributes:['name'],
         }]
     }) 
 
     return pokemonsDb;
}

async function getDetailPokemon(id){
    
    if(id.length < 5){
        const api = await getDetailPokeapi(id);
        return api;

    }else{
        const db = await getDetailPokeDb(id);
        const response ={
            id: db.id,
            name: db.name.toUpperCase(),
            image: db.image,
            stats:[
               {
                    name:"hp",
                    value: db.hp
                },
               {
                    name: "attack",
                    value: db.attack
                },
               {
                   name:"defense",
                   value: db.defense
                },
               {
                   name:"speed",
                   value: db.speed
                },
            ],
           
            types: db.types.map(t =>{
                 return t.name;
            }),
            height: db.height,
            weight: db.weight

        }
        
        return response
    }
   
   
}



async function createPokemon(name, image, types, hp, attack, defense, speed, height, weight){
    console.log(name)
    
    const newPokemon = await Pokemon.create({
        name,
        image,
        hp, 
        attack,
        defense, 
        speed, 
        height, 
        weight
    })

    const pokemonTypes = await Type.findAll({
        where:{
            name: {[Op.in]:types}
        }
    })

    await newPokemon.setTypes(pokemonTypes);



}

async function deletePokemon(id){

    await Pokemon.destroy({
        where: {
            id
        }
    })
}

async function findPokemonApi(name){

    try{
        let api = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`) 
    
            const pokemon = [{
                id: api.data.id,
                name: api.data.name.toUpperCase(),
                image: api.data.sprites.other.dream_world.front_default,
                stats: api.data.stats.map(s =>{
                    return {
                        
                            name: s.stat.name,
                            value: s.base_stat
                    }
                }),
                types: api.data.types.map(t => {
                    return t.type.name
                }),
                height: api.data.height,
                weight: api.data.weight
            }]
    
         return pokemon;
    }catch(error){
        return {message: error.message}
    }
}

async function findPokemonDb(name){

     const dbInfo = await getPokemonDb();
     return dbInfo.filter(p => p.name.toUpperCase() === name.toUpperCase())
}

module.exports ={
    allPokemons,
    getDetailPokemon,
    createPokemon,
    deletePokemon, 
    findPokemonApi,
    findPokemonDb
}