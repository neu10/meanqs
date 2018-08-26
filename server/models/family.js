const mongoose = require("mongoose");

const FamilyMemberSchema = mongoose.Schema({
    first_name :{
      type:String,
      required : true
    },
    last_name :{
      type:String,
      required : true
    },
    is_family_head :{
      type:Boolean,
      required : true
    },
    relation_with_family_head :{
      type:String,
      required : false
    },
});

const FamilyMember = module.exports = mongoose.model('FamilyMember',FamilyMemberSchema);
