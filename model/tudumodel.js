const mongoose = require('mongoose');
const db = require('../config/db');
const { Schema } = mongoose; 
const UserModel = require('../model/usermodel');

const toduSchema = new Schema({
    userid: { 
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

const ToduModel = db.model('tudo', toduSchema); 
module.exports = ToduModel;
