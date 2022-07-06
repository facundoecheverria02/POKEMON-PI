const {Type} = require('../db.js');
const axios = require('axios');


async function cargarTypes(){

    const typesApi = await axios("https://pokeapi.co/api/v2/type");

        typesApi.data.results.map(t =>{
            Type.findOrCreate({
                where: {name : t.name}
            })
        })
}

module.exports = {
    cargarTypes
}
