const {esquemaHotel} = require('../models/hotel')

const validar = async (req , res, next ) =>{
    const item = await esquemaHotel.findById(req.params.id)
    if ( item !== null){
        next()
    }else{
        res.status(500).json({ msg: 'id invalido o no existe'})
    }
}


module.exports = {validar}