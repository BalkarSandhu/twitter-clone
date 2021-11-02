const mongoose=require('mongoose');

let commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
        minlength:5,
        maxlength:300
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    tweet:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Tweet'
        }
    
},{timestamps:true});

const Comment=mongoose.model('Comment',commentSchema);

module.exports=Comment