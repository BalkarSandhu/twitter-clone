const express= require('express');
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./src/config/passport-local-strategy');
const {json,urlencoded}=require('body-parser');
const router=require('./src/routes/index');
var expressLayouts = require('express-ejs-layouts');
const connect = require('./src/config/database');
const cors=require('cors');


const app=express();
app.use(json());
app.use(urlencoded({extended:true}));
app.use(cors());

app.use(express.static(__dirname+'/src/assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use(expressLayouts);
app.set('layout',__dirname+'/src/views/layouts/layout');
app.set('view engine','ejs');
app.set('views','./src/views');


app.use(session({
    name:'twitter',
    secret:'balkar',
    resave:false,
    cookie:{
        max:600000
    }
}))

app.use(passport.initialize());
app.use(passport.session());
app.use('/',router);





app.listen(3000,async ()=>{
    await connect();
    console.log("server started at 3000");
})