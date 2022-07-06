const {Router} = require('express');
const {Type} = require('../db.js');

const router = Router();

router.get('/types', async (req, res) =>{

    try{
        const allTypes = await Type.findAll();

        res.status(200).json(allTypes)
    }catch(err){
        res.status(500).json({message: err.message});
    }
})


module.exports = router;