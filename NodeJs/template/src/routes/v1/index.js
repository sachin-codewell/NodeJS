const express = require('express');

const router = express.Router();

router.get('/home', (req,res)=>{
    res.send({
        success:true,
        data:{name:"Sachin Yadav"},
        error:{}
    })
})

module.exports = router;