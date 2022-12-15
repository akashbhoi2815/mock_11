const {Router} = require('express');
const {ProductModel} = require("../models/product.model")
const product_router = Router();

product_router.get("/",async(req,res)=>{
    const data= await ProductModel.find({})
    res.send(data)
})

product_router.post("/create",async(req,res)=>{
      try {
        const product = await ProductModel.insertMany([req.body]);
        res.send(product)
      } catch (error) {
        return res.send(error)
      }
})


product_router.delete("/delete/:Id",async(req,res)=>{
    const Id = req.params.Id
    await ProductModel.findByIdAndDelete({_id : Id})
    res.send({"msg" : "Note deleted successfully"})
    
})

module.exports={
    product_router
}