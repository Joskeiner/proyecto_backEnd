const express = require("express")
const logger = require("morgan")
const  cors = require("cors")



const app = express();


const indexRouter = require('./routes/routes')
// base de datos 
 const {connect} = require('./bd/bd')


app.use(logger('dev'))
app.use(express.json())
app.use(cors())


app.use('/' , indexRouter)


connect()
module.exports = app 