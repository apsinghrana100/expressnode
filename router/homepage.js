const express=require('express');

const router=new express.Router();
router.get('/',(req,res)=>{
    
        console.log('this is home page');
        res.send("thsi is howe page");
    });

    module.exports=router;