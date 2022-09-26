const express=require("express");
const db=require("./config/connection");
const cors = require('cors');

//Apollo Server integration for express
const {typeDefs,resolvers}=require("./schemas");
const { ApolloServer }=require("apollo-server-express");


const PORT=process.env.PORT || 3001
const app=express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const server= new ApolloServer(
    {
    typeDefs,resolvers}
    );

const startApolloServer=async (typeDefs,resolvers)=>{

await server.start();
server.applyMiddleware({app});

db.once("open",()=>{
    app.listen(PORT,()=>{
        console.log("APP RUNNING AT PORT "+PORT);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    
    }
        
        
        )

})

}



startApolloServer(typeDefs,resolvers);


