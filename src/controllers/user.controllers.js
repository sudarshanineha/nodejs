const dbConn = require('../../config/db.config');
const User = require('../models/user.model');
const UserModel = require('../models/user.model');


exports.getUserList = (req,res)=>{
    // console.log('all Users List');

UserModel.getAllUsers((err,users)=>{
    console.log('we r here');   
    if(err)
    res.send(err);
    console.log('Users',users);
    res.send(users)
})
}

//get user by id
exports.getUserByID = (req,res)=>{
    UserModel.getUserByID(req.params.id,(err,user)=>{
        if(err){
            res.send(err);
            console.log('single user data',user)
            res.send(user);
        }
    })
}

exports.createNewUser = (req,res)=>{
    console.log('req body',req.body);

    const userReqData = new user(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'please fill all fields'});
    }else{
        console.log('valid data');
        UserModel.createUser(userReqData,(err, user)=>{
            if(err){
                res.send(err);
                res.json({status:true, message:"user created successfully", data:user})
            }
        })
       
        }
    }

    exports.updateUser =(req,res)=>{
        console.log('UserReqData update',req.body);

        const userReqData = new user(req.body);
        if(req.body.constructor === Object && Object.keys(req.body).length === 0){
            res.send(400).send({success:false, message:'please fill all fields'});
        }else{
            console.log('valid data');
            UserModel.updateUser(req.params.id,userReqData,(err, user)=>{
                if(err){
                    res.send(err);
                    res.json({status:true, message:"user updated successfully", data:user})
                }
            })
           
            }
    }

    exports.deleteUser = (req,res)=>{
        UserModel.deleteUser(req.params.id,(err,user)=>{
            if(err)
            res.send(err);
            res.json({success:true, message:'User deleted'})
        })
    }

