import express from "express";

//user routes in this file 

const router=express.Router()

router.get('/',(req,res)=>{
    res.send('currently running');
})

export default router;  