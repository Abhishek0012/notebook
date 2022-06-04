import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
   name : {
       type : string ,
       required : true
   },
   email : {
       type : string ,
       required : true ,
       unique : true
   },
   password : {
       type : string ,
       required : true ,
   },
   date : {
       type : date ,
       dafault : Date.now
   }
});
module.exports = mongoose.model('user',userSchema);