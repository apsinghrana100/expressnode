const express=require('express');

const router=new express.Router();

router.get('/add-product',(req,res,next)=>{
    
    res.send('<form action="/admin/product" method="POST">Name<input type="text" name="title"><br>Size<input type="number" name="title"><br><button type="Submit">Submit</button></form>');
   console.log("hey i am line number 18");
})

router.use('/product',(req,res,next)=>{
    console.log("hey i am calling");
    
     console.log(req.body);
     res.send(req.body);
});

module.exports=router;