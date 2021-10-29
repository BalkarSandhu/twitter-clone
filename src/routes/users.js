const express=require('express');
const passport=require('passport');
const {signIn,signUp,profile,create, createSession}=require('../controllers/userProfile');

const router=express.Router();

router.get('/profile',profile);
router.get('/signup',signUp);
router.get('/signin',signIn);
router.post('/create',create);
router.post('/create-session',passport.authenticate('local', { successRedirect: '/',
failureRedirect: '/signin' }),createSession);

module.exports =router;