const { Router } = require('express');
const {allPokemons, getDetailPokemon, createPokemon, deletePokemon, findPokemonApi, findPokemonDb} = require('../controllers/pokemon.controllers.js');

const router = Router();



router.get('/pokemons', async (req, res) =>{

    const {name} = req.query;

    try{
        let poke = []

        if(name){
            
            poke = await findPokemonApi(name);
            console.log(poke)

          
            if(poke.length ===0 || poke.message){
                poke = await findPokemonDb(name)
               
            }

            res.status(200).json(poke);
            
            
        }else{
            let allPoke = await allPokemons();
        
            res.status(200).json(allPoke);
        }
        

    }catch(error){
        res.status(500).json({message:error.message})
    }
});


router.get('/pokemons/:id', async (req, res) =>{
    
    try{
        const {id} = req.params;
        const pokemon = await getDetailPokemon(id);
        res.status(200).json(pokemon);
    }catch(error){
        res.status(500).json({message:error.message})
    }

});


router.post('/pokemons', async(req, res) =>{
    const{name, image, types, hp, attack, defense, speed, height, weight} = req.body;

    try{
        await createPokemon(name.toLowerCase(), image, types, hp, attack, defense, speed, height, weight)
        res.status(200).json({message:"Pokemon creado correctamente"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
    
});

router.delete('/pokemons/:id', async(req, res) =>{
    try{
        const {id} = req.params;
        await deletePokemon(id);
        res.status(200).json({msg:"Se eliminó correctamente"});
    }catch(error){
        res.status(500).json({message:error.message})
    }
  
});



module.exports = router;