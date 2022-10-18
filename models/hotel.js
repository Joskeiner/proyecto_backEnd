const mongoose = require('mongoose')

const schema = mongoose.Schema;

const hotel = new schema({

        habitacionNom: {
            type: String,
            required: true 
        },
        descripcion:{
            type:String,
            required: true
        },
        disponible:{
            type:Boolean,
            required: true
        },
        capaciadad:{
            type: Number,
            required:true
        },
        estadiaDia:{
            type: Number,
            required:true 
        },
        estadiaNoche:{
            type:Number,
            required: true
        },
        precio:{
            type:Number,
            required: true
        }

})

const  esquemaHotel = mongoose.model('hotel' , hotel)


module.exports = {esquemaHotel}