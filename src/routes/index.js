const express= require('express');
const homeController=require('../controllers/homeController');

const router= express.Router();
router.get('/',homeController.root);

console.log("router up");

module.exports= router;