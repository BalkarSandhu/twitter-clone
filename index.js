const express= require('express');
const session=require('express-session');
const MongoStore = require('connect-mongo');
const passport=require('passport');
const passportLocal=require('./src/config/passport-local-strategy');
const {json,urlencoded}=require('body-parser');
const router=require('./src/routes/index');
var expressLayouts = require('express-ejs-layouts');
const connect = require('./src/config/database');
const cors=require('cors');
const flash=require('connect-flash');
const sassMiddleware=require('node-sass-middleware');
const {SetFlash}=require('./src/config/flashMW');

const app=express();
app.use(json());
app.use(urlencoded({extended:true}));
app.use(cors());

app.use(sassMiddleware({
    src:'./src/assets/scss',
    dest:'./src/assets/css',
    debug:true,
    outputStyle:'expanded',
    prefix:'/css'
}));

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
    },
    store:new MongoStore({
        mongoUrl: 'mongodb://localhost/twitter_dev',
        autoRemove:'disable'
    },function(err){
        if(err)console.error(err);

        console.log("mongo store connected");
    })
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAutheticatedUser);
app.use(flash());
app.use(SetFlash);
app.use('/',router);





app.listen(3000,async ()=>{
    await connect();
    console.log("server started at 3000");
})