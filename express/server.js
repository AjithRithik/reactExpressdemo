const express = require('express');
const path = require('path');
// const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


//Port number definition
const port = process.env.PORT || 8081;

//Getting our routes
const routers = require('./routers');

//using middleware
app.use('/static', express.static(path.join(__dirname, '../../react-express/build//static')));
// app.use(cors());
app.use(bodyParser.json());
app.use('/api', routers);

//Catch all other routes request and return it to the index file
app.get('*',(req,res)=>{
    res.sendFile('index.html', {root: path.join(__dirname, '../../react-express/build/')});
});


//App listing part
app.listen(port,(req,res)=>{
    console.log(`app running successfully ${port}`);
});
