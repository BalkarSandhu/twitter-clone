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

module.exports={create}