const {gql}=require("apollo-server-express");

//Using gql define the shape of data returnes

const typeDefs=gql`

type Product{
    _id:ID!,
    name:String!,
    description:String!,
    price:Float!,
    image:String!,
    stockQuantity:Int!

}

type Order{
    _id:ID!
    productDetails:[Product],
    createdOn:String

}


type Query{
    getProducts:[Product],
    getProduct(_id:String!):Product 
}


type Mutation{

    createOrder(productDetails:[ID]):Order
}


`;


module.exports=typeDefs;