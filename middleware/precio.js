const {esquemaHotel} = require('../models/hotel')



const cash = async (req , res , next) => {
    const parament =  req.body.precio 
    if( parament  >= 100 && parament !== null){
       next()
    }else{
       res.status(500).json({ msg : 'tiene que ingresar  un numero o un numero mas grande '})
    } 
}

module.exports = {cash}