const mongoose=require('mongoose');

const tweetSchema=new mongoose.Schema({
    content:{
        type: String,
        required:true,
        minlength:5,
        maxlength:300
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
},{timestamps:true});

const Tweet=mongoose.model('Tweet',tweetSchema);

module.exports=Tweet