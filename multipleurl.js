
const express=require('express');
const app=express();

const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    
    console.log('this is home page');
    res.send("thsi is howe page");
})

app.use('/add-product',(req,res,next)=>{
    
    res.send('<form action="/product" method="POST">Name<input type="text" name="title"><br>Size<input type="number" name="title"><br><button type="Submit">Submit</button></form>');
   
})

app.use('/product',(req,res,next)=>{
    console.log("hey i am calling");
    
     console.log(req.body);
     res.send(req.body);
})
app.listen(8000,()=>{
    console.log(`8000 port is listening `);
})