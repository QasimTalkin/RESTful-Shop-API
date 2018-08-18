const express = require('express');
const app = express();

app.use((req, res, next)=>{
    res.status(200).json({ 
    message: 'It woks'
    });

}); //sets up middle ware - > request goes through appu

module.exports=app;