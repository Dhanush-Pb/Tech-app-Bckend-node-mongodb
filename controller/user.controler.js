const UserService = require('../services/user.services');

exports.register = async (req, res, next) => { 
    try { 
        const { email, password } = req.body; // Fixed typo from req.boady to req.body
        const Sucessres = await UserService.registerUser(email, password);
        res.json({ status: true, success: 'User registered successfully',data:Sucessres }); // Fixed 'sucess' to 'success'
    } catch (error) { 
        next(error); 
    }
};

exports.login = async (req, res, next) => { 
    try { 
        const { email, password } = req.body; 
        const user= await UserService.checkuser(email)
        if(!user){ 
            throw('Youser donot exits')
        }
        const isMatch = await user.comparePassword(password)
        if(isMatch==false){ 
            console.log('password not match');
        }
        let tokendata={_id:user._id,email:user.email}
        const token=await UserService.genratetokern(tokendata,'secrateKey','1h')
        res.status(200).json({status: true, token: token});

    } catch (error) { 
        next(error); 
    }
};