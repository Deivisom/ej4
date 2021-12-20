const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.set("view engine", "ejs")

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render("index", {title:"Inicio"})
  })
app.get("/productos",(req,res)=>{
    res.render("productos",{title:"Productos"})
})
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
  });
app.listen(PORT,()=>{
    console.log("iniciando servidor " + PORT)
})
//https://github.com/Deivisom/ej4.git