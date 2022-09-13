const mongoose=require("mongoose");
const {Schema}=mongoose;

//Mongoose provide schema to model the application data

const productSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true

    },
    stockQuantity:{
        type:Number,
        min:0,
        default:0,
        required:true
    }



});


const Product=mongoose.model('Product',productSchema);
module.exports=Product;