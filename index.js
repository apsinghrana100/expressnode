//import express from 'express';
// const express=require('express')
// const app=express();

// app.get('/',(req,res)=>{
//     res.send("homepage");
// });

// app.get('/about',(req,res)=>{
//     res.send("aboutpage");
// })

// app.get('/contact',(req,res)=>{
//     res.status(200).send("contactlpage");
// })
// app.listen(8000,()=>{
//     console.log("8000 port is listening");
// })
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('In the middleware!');
  next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log('In another middleware!');
  res.send({key:"value"});
});

app.listen(3000);
