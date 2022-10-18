const {esquemaHotel} = require('../models/hotel')

const validarName = async (req , res, next ) =>{
    const item = await esquemaHotel.findOne({ habitacionNom: req.params.habitacionNom} )
    if ( item !== null){
        next()
    }else{
        res.status(500).json({ msg: ' el nombre no existe '})
    }
}
 
const validarNamePut = async (req , res, next ) =>{
    const item = await esquemaHotel.findOne( req.params.habitacionNom)
    if ( item !== null){
        next()
    }else{
        res.status(500).json({ msg: ' el nombre no existe '})
    }
}

 module.exports = {validarName, validarNamePut}
