

const UserModel= require('../model/usermodel');
const jwt=require('jsonwebtoken')
class UserService{ 
    static async registerUser(email,password){  
        try{ 
 const createUser=new UserModel ({email,password});
 return await createUser.save();
        }catch(err){ 
            console.log(err);
        }
    }

    static async checkuser (email){ 
        try{ 
return UserModel.findOne({email})

        }catch(err){ 
            console.log(err);
        }
    }
    static async  genratetokern(tokendata,secrateKey,jwt_expire){ 
        return jwt.sign(tokendata,secrateKey,{expiresIn:jwt_expire})
    }
}
module.exports=UserService;