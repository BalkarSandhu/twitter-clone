const Tweet =require('../models/tweet');

const create = function(req,res){
    Tweet.create({
        content:req.body.content,
        user:req.user._id
    },function(err,user){
        if(err)console.error(err);
        return;
    })
    return res.redirect('back');
}

module.exports={create}