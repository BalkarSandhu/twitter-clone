const Comment=require('../models/comment');
const Tweet=require('../models/tweet');

const create = function(req,res){
    Tweet.findById(req.body.tweet,function(err,tweet){
        if(tweet){
            Comment.create({
                content:req.body.content,
                tweet:req.body.Tweet,
                user:req.user._id
            },function(err,comment){
                if(err){
                    console.log(err);
                    return;
                }
                tweet.comments.push(comment);
                tweet.save();
                return res.redirect('back');
            })
        }
    })
}
const destroyComment=function(req,res){
    Comment.findById(req.params.id,function(err,comment){
        if(err){
            return res.redirect("/");
        }
        if(comment.user==req.user.id){
            let tweetId=comment.tweet;
            comment.remove();
            Tweet.findByIdAndUpdate(tweetId,{$pull:{comments:req.params.id}},function(err,tweet){
                return res.redirect('back');
            })
            
        }
        else{
            return res.redirect('back');
        }
    })
}

module.exports={create,destroyComment};