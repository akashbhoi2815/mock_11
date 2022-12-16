const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    title:{type:String,require:true},
    quantity:{type:String,require:true},
    priority:{type:String,require:true},
    description:{type:String,require:true}
}
,{
    timestamps: true 
})

const ProductModel = mongoose.model("user",userSchema);

module.exports={
    ProductModel
}

/**new Date().toLocaleDateString("en-US",{timeZone:'Asia/Kolkata'}) */