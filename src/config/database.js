const mongoose = require('mongoose');

const connect =()=>{
    console.log("DataBase connected");
    return mongoose.connect('mongodb://localhost:27017/twitter_dev');
}

module.exports=connect;