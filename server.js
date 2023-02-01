const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

var corsOptions = {
    origin: "http://localhost:8080/"
}  

app.use(cors(corsOptions))

// parse requests of content-type - application/json

app.use(bodyParser.json())
// parse requests of content-type - application/x-www-form-urlenconded

app.use(bodyParser.urlencoded({extended:true}))

require("app/routes/tutorial.routes")(app)

//simple route
app.get("/", (req, res) =>{
    res.json({message:"Welcome to Turing.com"});
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>{
    console.log('Server is running on port $(PORT).');
})