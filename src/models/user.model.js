var dbConn = require('../../config/db.config');

var User =(user) => {
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.gender = user.gender;
    this.city= user.city;
    this.address=user.address;
    this.profile=user.profile;
}

User.getAllUsers = (result)=>{
    dbConn.query('SELECT * FROM user',(err,res)=>{
        if(err){
            console.log('Error while fetching Users', err);
            result(err);
        }else{
            console.log('Users fetched successfully');
            result(res);
        }
    })
}
//get User by Id from Db
User.getUserByID = (id,result)=>{
    dbConn.query('SELECT * FROM user WHERE id=?',id, (err, res)=> {
            if (err) {
                console.log('Error while fetching Users by id', err);
                result(err);
            } else {
                result(res);
            }
        })
}

//add new user
User.createNewUser = (userReqData,result)=>{
   dbConn.query('INSERT INTO user SET ?',userReqData,(err,res)=>{
    if(err){
        console.log(err);
        result(err);
    }else{
        console.log('user created successfully');
        result(res)
    }
   })
}

User.updateuser = (id, userReqData, result)=>{
    dbConn.query("UPADTE USER SET firstname=?,lastname=?,gender=?,city=?,address=?,profile=? WHERE id=?",[userReqData.firstname,userReqData.lastname,userReqData.gender,userReqData.city,userReqData.address,userReqData.profile, id],()=>{
        if(err){
            console.log('error');
        result(res);
        }
        else{
            console.log('user updated');
            result(res);
        }
    })
}
User.deleteUser = (id,result)=>{
    dbConn.query('DELETE FROM user WHERE id=?', [id],(err,res)=>{
        if(err){
            console.log('error while deleting');
            result(err);
        }else{
            result(res);
        }
    })
}
module.exports= User;