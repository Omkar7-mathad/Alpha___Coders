const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();

app.use(cors());
app.use(express.json());


// REGISTER USER
app.post("/register",(req,res)=>{

const {email,password} = req.body;

db.run(
"INSERT INTO users (email,password) VALUES (?,?)",
[email,password],
function(err){

if(err){
return res.json({message:"User already exists"});
}

res.json({message:"User registered successfully"});

});

});


// LOGIN USER
app.post("/login",(req,res)=>{

const {email,password} = req.body;

db.get(
"SELECT * FROM users WHERE email=? AND password=?",
[email,password],
(err,row)=>{

if(row){
res.json({message:"Login successful"});
}
else{
res.json({message:"Invalid credentials"});
}

});

});


// SAVE QUIZ MARKS
app.post("/quiz",(req,res)=>{

const {email, correctAnswers} = req.body;

db.run(
"UPDATE users SET correct_answers = ? WHERE email = ?",
[correctAnswers, email],
function(err){

if(err){
return res.json({message:"Error saving quiz marks"});
}

res.json({message:"Quiz marks saved successfully"});

});

});


app.listen(5000,()=>{
console.log("Server running on http://localhost:5000");
});