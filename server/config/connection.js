const mongoose=require("mongoose");


//Connect to mongodb using mongoose.connect

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/sweetindulgence');


module.exports=mongoose.connection;