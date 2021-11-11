const Tweet =require('../models/tweet');
const comment =require('../models/comment');

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

const destroy=function(req,res){
    Tweet.findById(req.params.id,function(err,tweet){
        if(err){
            return res.redirect("/");
        }
        if(tweet.user==req.user.id){
            tweet.remove();
            comment.deleteMany({tweet:req.params.id},function(err){
                    return res.redirect('back');
            });
        }
        else{
            return res.redirect('back');
        }


    })
}

module.exports={create,destroy}