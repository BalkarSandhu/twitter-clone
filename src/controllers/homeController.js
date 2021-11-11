const Tweet=require('../models/tweet');
module.exports.root=function(req,res){
    Tweet.find({})
    .populate('user')
    .populate({
        path:'comments',
        populate:{
            path:'user'
        }
    })
    .exec(function(err,tweets){
        let fetchedTweets=tweets;
        if(err){
            console.error(err);
            fetchedTweets={};

        }
    
    return res.render("home",{name:"Twitter",tweets:fetchedTweets});
    })
}