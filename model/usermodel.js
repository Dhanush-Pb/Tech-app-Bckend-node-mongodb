const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require('bcrypt');
const { Schema } = mongoose; 

const userSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  }
});

userSchema.pre('save',async function(){ 
  try {
     var user= this;
     const salt=await(bcrypt.genSalt(10));
     const hashpass=await bcrypt.hash(user.password,salt);
     user.password=hashpass;
  } catch (error) {
    throw eroor;
  }
}) 
userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw error;
  }
};

const UserModel = db.model('User', userSchema); 
module.exports = UserModel;
