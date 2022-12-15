const express = require('express');
const { connection } = require('./config/db');
const cors = require('cors')
const {product_router} = require("./router/product.router")
const app = express();
app.use(cors({
    origin : "*"
}))
app.use(express.json());


app.use("/products",product_router)


app.listen(8080,async()=>{
    try {
        await connection
        console.log("connected");
    } catch (error) {
        console.log('error: ', error);
    }
    console.log("Port is running")
})