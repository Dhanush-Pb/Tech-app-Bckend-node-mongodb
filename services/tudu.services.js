const ToduModel =require('../model/tudumodel');

class Todoservice{ 
    static async createtudo(userid ,title,desc){ 
const createtudo=new ToduModel({userid,title,desc})
return await createtudo.save();
    }
    static async getTududata(userid){ 
        const Tududata= await ToduModel.find({userid})
        return Tududata
            }
}

module .exports=Todoservice;