const express = require("express");
const cros = require("cors");
const mysql = require("mysql");
const app = express();

app.use(express.json());
app.use(cros());

const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"asdf",
    database:"crud"
})


app.get("/",(req,res) =>{
    const sql = "select * from student";
    db.query(sql,(err,data,fields)=>{
        if(err) return res.json("error ");
        return res.json(data);
    })
})

app.post("/create",(req,res)=>{
    const sql = "insert into student (`name`,`email`)values(?)";
    const values=[
        req.body.name,
        req.body.email
    ]
    db.query(sql,[values],(err,data)=>{
        if(err) return res.json("error ");
        return res.json(data);
    })
})
app.put("/update/:id",(req,res)=>{
    const sql = "update student set `name` = ? ,`email` = ? where id = ? ";
    const values=[
        req.body.name,
        req.body.email,
        req.params.id
    ]
   
    db.query(sql,values,(err,data)=>{
        if(err) return res.json(`error ${err}`);
        return res.json(data);
    })
})
app.delete("/delete/:id",(req,res)=>{
    const sql = "delete from student where id = ? ";
 
    db.query(sql,req.params.id,(err,data)=>{
        if(err) return res.json(`error ${err}`);
        return res.json(data);
    })
})


app.listen(8081,() => {
    console.log("listening to port 8081");
})