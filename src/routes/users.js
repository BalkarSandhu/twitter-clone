const express=require('express');
const {signIn,signUp,profile,create}=require('../controllers/userProfile');

const router=express.Router();

router.get('/profile',profile);
router.get('/signup',signUp);
router.get('/signin',signIn);
router.post('/create',create);

module.exports =router;