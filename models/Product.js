const mangoose=require("mongoose");
const productSchema=mangoose.Schema({
    productName:{
        type: String,
        required: true,

    },
    price:{
      type:String,  
      required:true,
    },
    image:{
        type:String,
        required:true,
    }
    
})
