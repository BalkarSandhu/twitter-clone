const express=require('express');
const passport=require('passport');
const {create}=require('../controllers/commentController');

const router=express.Router();

router.post('/create',create);

module.exports=router;