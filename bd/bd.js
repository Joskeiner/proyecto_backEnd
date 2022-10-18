const mongoose = require('mongoose')
require('dotenv').config()

const connect = async () => {
    try{
        await mongoose.connect(process.env.CONNECTDB)
        console.log("Base de datos conectada")

    }
    catch{
        console.log(" problemas el conectar la  base de datos ")
    }
}

module.exports = {connect}

