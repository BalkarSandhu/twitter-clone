const express= require('express');
const userRouter=require('./users');
const homeController=require('../controllers/homeController');
const tweetRouter=require('./tweet');
const commentRouter=require('./comment')


const router= express.Router();
router.get('/',homeController.root);
router.use('/users',userRouter);
router.use('/tweets',tweetRouter);
router.use('/comments',commentRouter);



console.log("router up");

module.exports= router;