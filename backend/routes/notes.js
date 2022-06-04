const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
     obj = {
         name : "Abhishek" ,
         age : 18 
     }
     res.json(obj);
})
module.exports = router 