
const axios = require("axios")
require('dotenv').config()

const options = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/v2/get-meta-data',
    headers: {
      'X-RapidAPI-Key': process.env.KEYAPI,
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    }
  };

const poke = async (req, res ) => {
try {
    const pokeBola = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.nombre}`)
    res.status(200).json({satus: pokeBola.satus , data: pokeBola.data})
} catch (error) {
    res.status(404).json({error : error.response.status, data: error.response.data})
}
}



const consultasAxios =  async (req , res) =>{
    try{
        const respuesta = await axios.request(options)
        res.status(200).json({status: respuesta.status , data : respuesta.data})
    }catch(error){
        res.json({error : error.response.status , data: error.response.data })
    }
}


module.exports = {consultasAxios ,poke}