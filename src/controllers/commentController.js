const Comment=require('../models/comment');
const Tweet=require('../models/tweet');

const create = async function(req,res){
    const tweet=await Tweet.findById(req.body.tweet);
    try{
        const comment= await Comment.create({
            content:req.body.content,
            tweet:req.body.tweet,
            user:req.user._id
        });
        tweet.comments.push(comment);
        tweet.save();
        return res.redirect('/');
    }
    catch(err){
        console.log(err);
        return res.redirect('/');
    }
}
const destroy=async function(req,res){
    const comment=await Comment.findById(req.params.id);
    try{
        if(comment.user==req.user.id){
            let tweetId=comment.tweet;
            comment.remove();
            Tweet.findByIdAndUpdate(tweetId,{$pull:{comments:req.params.id}})  
            return res.redirect('back'); 
        }
    }
    catch(err){
        console.log(err);
        return;
    }
}

module.exports={create,destroy};