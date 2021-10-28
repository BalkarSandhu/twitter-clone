const express= require('express');
const router=require('./src/routes/index');
var expressLayouts = require('express-ejs-layouts');
const connect = require('./src/config/database');


const app=express();

app.use(express.static(__dirname+'/src/assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use(expressLayouts);
app.set('layout',__dirname+'/src/views/layouts/layout');
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/',router);





app.listen(3000,async ()=>{
    await connect();
    console.log("server started at 3000");
})