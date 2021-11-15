const express=require('express');
const passport=require('passport');
const {create,destroyComment}=require('../controllers/commentController');

const router=express.Router();

router.post('/create',create);
router.get('/destroy/:id',passport.checkAuthentication,destroyComment);

module.exports=router;