const {validationResult}= require('express-validator')
const {esquemaHotel} = require('../models/hotel')
const controllerIndex = (req , res) => {
    res.send("hello joskener")
}


const crud = {
    //ver GET
    async Busqueda (req ,res)  {
        const hoteles =  await esquemaHotel.findOne( {habitacionNom :req.params.habitacionNom})
        res.status(200).json({hoteles})
     }
     ,
     async getVer  (req , res) {
         const hoteles = await esquemaHotel.find()
         res.status(200).json({hoteles})
     },
     //crear  PU
     async pushVista (req , res) {
        try{
            const err = validationResult(req)
            if(err.isEmpty()){
                const hoteles = new esquemaHotel(req.body)
                await hoteles.save()
                res.status(501).json({hoteles})
            }else {
                res.status(501).json({err})
            }
        }catch(error){
            res.status(501).json({error})
        }
    },
    //editar esquema PUT
    async editaarEsquema (req , res ){
        try{
            const err = validationResult(req)
            if(err.isEmpty()){
                await  esquemaHotel.findByIdAndUpdate(req.params.id , req.body)
                res.json({msg: 'se actualizo'})
            }else{
                res.status(501).json(err)
            }
        }
        catch (error){
        res.status(501).json({error})
        }
    },//editar esquema PUT
    async editarXNombre (req , res ){
        try{
            const err = validationResult(req)
            if(err.isEmpty()){
                await  esquemaHotel.findOneAndUpdate(req.params.habitacionNom , req.body)
                res.json({msg: 'se actualizo'})
            }else{
                res.status(501).json(err)
            }
        }
        catch (error){
        res.status(501).json({error})
        }
    },
    //delete 
    async eliminarId (req , res) {
        const item = await esquemaHotel.findByIdAndDelete(req.params.id)
        
        res.status(200).json({msg: 'se a eliminado ', item})
    }
}


module.exports= crud




