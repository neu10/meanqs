const express = require("express");
const  router = express.Router();
const FamilyMember = require("../models/family");

router.post('/member',(req,res) => {
  let familyMember = new FamilyMember();
  familyMember.first_name = req.body.first_name;
  familyMember.last_name = req.body.last_name;
  familyMember.is_family_head = req.body.is_family_head;
  familyMember.relation_with_family_head = req.body.relation_with_family_head;
  familyMember.save((err,member)=>{
    if(err){
      console.log(err);
      res.json({msg: 'Failed to add member'});
    }else{

      res.json({msg: 'Member added succesfully'});
    }
  })
});


router.get('/members',(req,res) => {
  FamilyMember.find((err,members)=>{
    res.json(members);
  })
});

module.exports = router;
