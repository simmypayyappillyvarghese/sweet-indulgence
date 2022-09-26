const {Product}=require("../model");


const resolvers={

Query:{

    getProducts:async (parent,args)=>{
        const response=await Product.find({});
        return response;

    }

}

}

module.exports=resolvers;