const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const casesData = require('./cases.json');
//const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api')

//  'mongodb://localhost:27017'
mongoose.connect('mongodb://localhost/testcovid',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=>{
    console.log('mongoose is connected !!')
});

//make res available
app.use(express.json());
app.use(express.urlencoded({extends:false}));



//log http req
app.use(morgan('tiny'));
app.use('/api',routes);



app.listen(PORT, console.log(`server is starting at ${PORT}`));