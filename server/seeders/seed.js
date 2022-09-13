const connection=require("../config/connection");
const productSeeds=require("./productSeeds.json");
const {Product,Order}=require("../model");


//If connection fails/error occurs return/throw the error
connection.on("error",(err)=>err);


//If successful,run below code and exit the node process


connection.once("open",async()=>{

  // Drop existing products
  await Product.deleteMany({});   

// Creating  products from the seeds
  await Product.collection.insertMany(productSeeds);

  console.table(productSeeds);
  console.log("Products Seeds inserted to Database");
  
  process.exit(0);
});

