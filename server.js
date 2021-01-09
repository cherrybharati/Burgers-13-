const express = require('express')
const app = express()
const PORT = 8000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const hbs = require('express-handlebars')
app.engine("handlebars", hbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

const connection = require('./config/connection')




app.get("/", function(req, res){
    const qry = "SELECT * FROM burger"
   connection.query(qry, function(err, result){
       if(err) throw err;
       console.log(result)
       res.render("index", {title: "Burgers!", burgers: result})
   })
})

app.post("/newburger", function(req, res){
    const qry = "insert into burger (name, eaten) values (?, ?)";
    const data = [req.body.name, 0]
    connection.query(qry, data, function(){
        res.redirect("/")
    })

})

app.get("/order", function(req, res){
    console.log()
const qry = "update burger set eaten = 0 where id = ?"
const data = [req.query.id]
    connection.query(qry, data, function(){
        res.redirect("/")
    })

})

app.get("/delete", function(req, res){
    console.log()
const qry = "delete from burger where id = ?"
const data = [req.query.id]
    connection.query(qry, data, function(){
        res.redirect("/")
    })

})


app.listen(PORT, function(){
    console.log("http://localhost:"+ PORT)
})