const {Schema,model}=require("mongoose");
const mongoose=require("mongoose");

//Date Library for formatting the date
const dayjs = require('dayjs');

//Mongoose provide schema to model the application data
//Mongoose have two schema option(toJSON and toObject),the data fetched from mongoose is transformed to JSON
//id:false ensure the default _id column wont be created

const orderSchema=new Schema(
    {
    productDetails:[
        {
            type: Schema.Types.ObjectId,
            ref:"Product"
        }
    ],
    createdOn:{

        type:Date,
        default:Date.now(),
        get:(date)=>{
            return dayjs.format("MM/DD/YYYY HH:MM");
        }

    }

},
{
    toJSON:{
        getters:true
    },
    id:false
}

);


const Order=mongoose.model('Order',orderSchema);
module.exports=Order;

