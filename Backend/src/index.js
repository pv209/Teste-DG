
const express = require('express');
const app = express();
require('dotenv').config();

const protocol = process.env.PROTOCOL || 'http'
const ip = require('ip').address();
const port = process.env.PORT || '3030'
const routes = require('./routes');

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(routes);
app.listen(port, () => console.log(`funcionando, porta:${port} or ${protocol}://${ip}:${port}`))