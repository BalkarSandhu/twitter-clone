const express=require('express');
const userController=require('../controllers/userProfile');

const router=express.Router();

router.get('/profile',userController.profile);

module.exports =router;