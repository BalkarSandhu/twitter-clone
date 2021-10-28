const User=require('../models/user');

const profile = function(req,res){
   return res.render('users/user_profile');
}

const signUp=function(req,res){
   return res.render('users/user_sign_up',{
      title:"Twitter | Sign Up"
   });
}

const signIn=function(req,res){
   return res.render('users/user_sign_in',{
      title:"Twitter | Sign In"
   });
}

const create = function (req,res){
   if(req.body.password != req.body.confirm_password){
     return res.redirect('back');
   }
   User.findOne({email:req.body.email},function(err,user){
      if(err){
         console.error(err)
         return;
      }
      if(!user){
         User.create(req.body,function(err,res){
            if(err){
               console.error(err)
               return;
            }
            return res.redirect('/users/signin')

         })
      }
         else{
            return res.redirect('/users/signin')
         }
   })
}

const createSession = function (req,res){
   return res.status(200).end();
}

module.exports ={profile,signIn,signUp,create,createSession};