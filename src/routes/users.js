const express=require('express');
const userController=require('../controllers/userProfile');

const router=express.Router();

router.get('/profile',userController.profile);
router.get('/signup',userController.signUp);
router.get('/signin',userController.signIn);

module.exports =router;