const express = require('express');
const cors = require("cors");
const dotenv = require('dotenv')
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

dotenv.config();

const corsOptions = {
    origin:'https://to-do-app-ten-snowy-12.vercel.app/', 
    credentials:true,            
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use('/',routes);

const port = process.env.PORT || 5500;
const hostname = 'localhost';

const ATLAS_URL = process.env.ATLAS_URL;

mongoose.connect(ATLAS_URL);
.then(res => {
    app.listen(port, hostname, () => {
        console.log(`Server is running at ${hostname}: ${port}`);
    })
})
.catch(err => console.log(err)); 
