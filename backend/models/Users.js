const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
   name : {
       type : String ,
       required : true
   },
   email : {
       type : String ,
       required : true ,
       unique : true
   },
   password : {
       type : String ,
       required : true ,
   },
   date : {
       type : Date ,
       dafault : Date.now
   }
});
const User = mongoose.model('Users',userSchema);
User.createIndexes();
module.exports = User ;