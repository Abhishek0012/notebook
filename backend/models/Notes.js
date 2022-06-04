import mongoose from 'mongoose';
const { Schema } = mongoose;

const notesSchema = new Schema({
     title : {
       type : string ,
       required : true
   },
    description : {
       type : string ,
       required : true ,
       unique : true
   },
   tage : {
       type : string ,
       default : "general"
   },
   date : {
       type : date ,
       dafault : Date.now
   }
});
module.exports = mongoose.model('notes',notesSchema;