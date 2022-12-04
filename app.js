
const express=require('express');
const app=express();

const bodyparser=require('body-parser');

const shoprouter=require('./router/shop.js');
const homerouter=require('./router/homepage.js');

app.use(bodyparser.urlencoded({extended:false}));


///here routing
app.use('/admin',shoprouter);
app.use(homerouter);


//error 404////

app.use((req,res,next)=>{
    res.status(400).end('<h1>page does not found</h1>');
})

app.listen(8000,()=>{
    console.log(`8000 port is listening `);
})