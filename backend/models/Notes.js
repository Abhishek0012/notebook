const mongoose = require('mongoose')
const { Schema } = mongoose;

const notesSchema = new Schema({
     title : {
       type : String ,
       required : true
   },
    description : {
       type : String ,
       required : true ,
       unique : true
   },
   tage : {
       type : String ,
       default : "general"
   },
   date : {
       type : Date ,
       dafault : Date.now
   }
});
module.exports = mongoose.model('Notes',notesSchema);