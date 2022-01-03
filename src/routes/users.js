const express=require('express');
const passport=require('passport');
const {
    signIn,
    signUp,
    profile,
    update,
    create,
    createSession,
    destroySession
                    }=require('../controllers/userProfile');

const router=express.Router();

router.get('/profile/:id', passport.checkAuthentication, profile);
router.get('/signup',signUp);
router.get('/signin',signIn);
router.post('/create',create);
router.post("/update/:id",passport.checkAuthentication,update);
router.post('/create-session',passport.authenticate('local', {
failureRedirect: '/signin' }),createSession);

router.get('/signout',destroySession);

module.exports =router;