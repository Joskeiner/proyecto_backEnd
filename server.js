const app = require("./app")
require("dotenv").config()
const  port = process.env.PORT || 3030;


app.listen(port , () => {
    console.log(` example apps is listened  in ${port}`)
})