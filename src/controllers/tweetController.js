const Tweet =require('../models/tweet');
const Comment =require('../models/comment');

const create = async function(req,res){
    try{
        await Tweet.create({
            content:req.body.content,
            user:req.user._id
        })
        return res.redirect('back');
    }
    catch(err){
        console.log(err);
        return;
    }
}

const destroy=async function(req,res){
    try{
        const tweet=await Tweet.findById(req.params.id);
            if(tweet.user==req.user.id){
                tweet.remove();
                
                Comment.deleteMany({tweet:req.params.id});
            }
            return res.redirect('back');
        }
    catch(err){
        console.log(err);
        return res.redirect("/");
    }
}

module.exports={create,destroy};