const User=require('../models/user');
const Noty = require('noty');



const profile = function(req,res){
   User.findById(req.params.id,function(err,user){
      if(!user){
         return res.redirect("/");
      }
      
      return res.render('users/user_profile',{
         title:"User Profile",
         profile_user:user
      });
   })
   
}
const update=function(req,res){
   if(req.user.id==req.params.id){
      User.findByIdAndUpdate(req.user.id,req.body,function(err,user){
         if(err){
            console.log("Error updating user");
            return res.redirect("/")
         }
         res.redirect('back');
      })
   }
   else{
      res.status(401).send("Unauthorised");
   }
}

const signUp=function(req,res){
   if(req.isAuthenticated()){
      return res.redirect('/users/profile');
   }
   
   return res.render('users/user_sign_up',{
      title:"Twitter | Sign Up"
   });
}

const signIn=function(req,res){
   if(req.isAuthenticated()){
      return res.redirect('/users/profile');
   }
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
         User.create(req.body,function(err,user){
            if(err){
               console.error(err)
               return;
            }
            return res.redirect('/users/signin');

         })
      }
         else{
            return res.redirect('/users/signin')
         }
   })
}

const createSession = function (req,res){
   req.flash('info',"logged in successfully")
   return res.redirect('/');
}

const destroySession=function (req,res){
   req.logout();
   
   req.flash('info',"logged out successfully")
   return res.redirect('/');
}

module.exports ={profile,update,signIn,signUp,create,createSession,destroySession};