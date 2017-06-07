const router = require('koa-router')()
var UserModel=require('../models/UserModel');
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.post('/zhuce',async function (ctx, next) {
	var user = new UserModel({});
	user.email = ctx.request.body['email'];
	user.pwd = ctx.request.body['pwd'];
	user.nicheng = ctx.request.body['nicheng'];
	user.role=1;
	user.createtime=new Date();
	  try{
	  	let rs = await user.save();
	  	//console.log(rs);
	  	ctx.status=307;//http重定向状态码
	  	ctx.redirect('login');
	  }
	  catch(err){
	  	let errMsg = err.message;
	  		if(errMsg.indexOf('$emailuiq')>-1){
		      ctx.body = 2+':'+'email重复';		//{type:0,msg:'email重复'};
		    }else if(errMsg.indexOf('$nichenguiq')>-1){
		      ctx.body = 3+':'+'昵称重复';		//{type:0,msg:'昵称重复'};
		    }else{
		      ctx.body = 0+':'+'数据库错误';	//{type:0,msg:'数据库错误'};
		    }
			return;
		}  
	   		ctx.body = '注册成功';
});
router.post('/login',async function(ctx, next){
	var user = {};
	user.email = ctx.request.body['email'];
	user.pwd = ctx.request.body['pwd'];
    let rs = await UserModel.findOne(user);
      console.log(rs);
      if(rs){
      	let loginbean = {};
	      loginbean.id=rs._id;
	      loginbean.nicheng=rs.nicheng;
	      loginbean.role=rs.role;
	      ctx.session.loginbean=loginbean;
     	  ctx.body=1
      }else{
      	ctx.body=0
      }

	// try{
	// 	let rs = await UserModel.findOne({email:ctx.request.body['email'],pwd:ctx.request.body['pwd']});
	// 	console.log(rs);
	// 	ctx.body = '登录成功'
	// }catch(err){
	// 	console.log(err);
	// 	ctx.body='登录失败'
	// }
	
})
module.exports = router
