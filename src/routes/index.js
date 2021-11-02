const express= require('express');
const userRouter=require('./users');
const homeController=require('../controllers/homeController');
const tweetRouter=require('../routes/tweet');


const router= express.Router();
router.get('/',homeController.root);
router.use('/users',userRouter);
router.use('/tweets',tweetRouter);


console.log("router up");

module.exports= router;