const mongoose=require('mongoose');

let tweetSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        minlength:10,
        maxlength:300
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
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