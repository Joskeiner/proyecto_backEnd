const express = require('express')
const router = express.Router()
const Crud = require('../controller/indexController')
const {check} =  require('express-validator')
const { validar} = require('../middleware/validar')
const {cash} = require("../middleware/precio")
const {validarName , validarNamePut} = require("../middleware/validarName")
const crud = require('../controller/indexController')
const {consultasAxios, poke}= require("../controller/aipConsulta")



//get 
//router.get('/' , controllerIndex)
router.get('/view', Crud.getVer)
router.get('/search/:habitacionNom', validarName,Crud.Busqueda)   

//consulta axios 
router.get('/hotel' , consultasAxios)
router.get('/poke/:nombre', poke)

//post 
router.post('/create' ,cash, [
check("habitacionNom").not().isEmpty().withMessage("se tiene que cargar un nombre  de habitacion").isLength({ min: 4}).withMessage("se tiene que ingresar un nombre mayor a 4 letras "),//mejorar el check para que nose envie solo espacios
check("descripcion").not().isEmpty().withMessage("se tiene que cargar una descripcionde la habitacion").isLength({ min: 15}).withMessage("se tiene que ingresar una descripcion mayor a 15 letras "),
check("disponible").not().isEmpty().withMessage("se tiene que ingresar si esta ocupada").isBoolean().withMessage("se tiene que ingresar un boolean "),
check("capaciadad").not().isEmpty().withMessage("se tiene que ingresar la capacidad de las habitaciones ").isInt().withMessage("se tiene que ingresar un numero entero "),
check("estadiaDia").not().isEmpty().withMessage("se tiene que ingresar la cantidad de dias estara en la habitacion").isInt().withMessage("se tiene que ingresar un numero entero "),
check("estadiaNoche").not().isEmpty().withMessage("se tiene que ingresar la cantidad de noches estara en la habitacion").isInt().withMessage("se tiene que ingresar un numero entero "),
check("precio").not().isEmpty().withMessage("se tiene que ingresar el precio de la habitacion ").isFloat().withMessage("se tiene que ingresar un numero con punto Ej = 22.22")

], Crud.pushVista)


//PUT

router.put('/edit/:id' ,validar,  cash,[
    check("habitacionNom").not().isEmpty().withMessage("se tiene que cargar un nombre  de habitacion").isLength({ min: 4}).withMessage("se tiene que ingresar un nombre mayor a 4 letras "),//mejorar el check para que nose envie solo espacios
    check("descripcion").not().isEmpty().withMessage("se tiene que cargar una descripcionde la habitacion").isLength({ min: 15}).withMessage("se tiene que ingresar una descripcion mayor a 15 letras "),
    check("disponible").not().isEmpty().withMessage("se tiene que ingresar si esta ocupada").isBoolean().withMessage("se tiene que ingresar un boolean "),
    check("capaciadad").not().isEmpty().withMessage("se tiene que ingresar la capacidad de las habitaciones ").isInt().withMessage("se tiene que ingresar un numero entero "),
    check("estadiaDia").not().isEmpty().withMessage("se tiene que ingresar la cantidad de dias estara en la habitacion").isInt().withMessage("se tiene que ingresar un numero entero "),
    check("estadiaNoche").not().isEmpty().withMessage("se tiene que ingresar la cantidad de noches estara en la habitacion").isInt().withMessage("se tiene que ingresar un numero entero "),
    check("precio").not().isEmpty().withMessage("se tiene que ingresar el precio de la habitacion ").isFloat().withMessage("se tiene que ingresar un numero con punto Ej = 22.22")
    
    ], Crud.editaarEsquema)

    router.put('/editxNom/:nombre' ,validarNamePut, cash, [
        check("habitacionNom").not().isEmpty().withMessage("se tiene que cargar un nombre  de habitacion").isLength({ min: 4}).withMessage("se tiene que ingresar un nombre mayor a 4 letras "),//mejorar el check para que nose envie solo espacios
        check("descripcion").not().isEmpty().withMessage("se tiene que cargar una descripcionde la habitacion").isLength({ min: 15}).withMessage("se tiene que ingresar una descripcion mayor a 15 letras "),
        check("disponible").not().isEmpty().withMessage("se tiene que ingresar si esta ocupada").isBoolean().withMessage("se tiene que ingresar un boolean "),
        check("capaciadad").not().isEmpty().withMessage("se tiene que ingresar la capacidad de las habitaciones ").isInt().withMessage("se tiene que ingresar un numero entero "),
        check("estadiaDia").not().isEmpty().withMessage("se tiene que ingresar la cantidad de dias estara en la habitacion").isInt().withMessage("se tiene que ingresar un numero entero "),
        check("estadiaNoche").not().isEmpty().withMessage("se tiene que ingresar la cantidad de noches estara en la habitacion").isInt().withMessage("se tiene que ingresar un numero entero "),
        check("precio").not().isEmpty().withMessage("se tiene que ingresar el precio de la habitacion ").isFloat().withMessage("se tiene que ingresar un numero con punto Ej = 22.22")
        
        ], Crud.editarXNombre)
//delete 


router.delete('/delete/:id' , validar , crud.eliminarId)











module.exports = router