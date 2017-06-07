var mongoose = require('mongoose');
//注意大坑：如果是user对应的数据集会自动变成users    
  var UserModel = mongoose.model('user', new mongoose.Schema({  
      email: String,   						    //映射关系
      pwd: String,   
      nicheng: String,
	  role:Number,
	  createtime:Date
    },{_id:true})); 

  module.exports=UserModel;