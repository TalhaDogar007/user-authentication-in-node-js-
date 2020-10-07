const bcrypt =require('bcryptjs')
const User =require('../model/signup');
const jwt = require('jsonwebtoken');


const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'this is secret key', {
    expiresIn: maxAge
  });
};


exports.loginForm = (req, res, next) => {
     
      res.render('login');
   
  };

exports.logout = (req, res, next) => {
     
  res.cookie('jwt', '', {maxAge: 1 });


  res.redirect('/'); 
};


  exports.postLoginData = (req, res, next) => {
    const email = req.body.email;
    const pass = req.body.pass;
    
    User.findOne({ where: { email: email } })
    .then(user => {
      if (!user) {
        return res.render('login', {emailof: 'please enter correct email' });
      }
      
      bcrypt.compare(pass,user.password).then( ifmatch =>{
         if(ifmatch){
          //console.log(user.id);
           const token = createToken(user.id);
           res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
          // res.status(200).json({ user: user.id });
          return  res.redirect('/'); 
            
         }
         
         return res.render('login', {passof: 'please enter correct password' });
         
      }) 
      })
    .catch(err => {
      console.log("this is error",err)
      res.redirect('/login');
    })
     
  };