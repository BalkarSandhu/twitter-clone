const express= require('express');
const userRouter=require('./users');
const homeController=require('../controllers/homeController');


const router= express.Router();
router.get('/',homeController.root);
router.use('/users',userRouter);

console.log("router up");

module.exports= router;