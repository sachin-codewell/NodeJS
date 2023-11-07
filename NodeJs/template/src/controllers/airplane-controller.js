const logger = require("../config/logger-config.js")
const { AirplaneSerivce } = require("../services/index.js")

async function createPlane(req,res){
   try {
    const airplane = await AirplaneSerivce.createPlane({
        modelName:req.body.modelName,
        capacity:req.body.capacity
    })

    return res.status(201).json({
        success:true,
        message:"Airplane created successfully",
        data:airplane,
        error:{}
    })
    
   } 
   catch(error) {
    logger.error("Something went wrong in controller: createPalne");
    return res.status(400).json({
        success:false,
        message:"Something went wrong while creating airplane",
        data:{},
        error:{}
    })
     
   }
}

module.exports = {
    createPlane
}