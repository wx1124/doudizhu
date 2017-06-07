<template>
<div class="container">
	<el-row style="margin-bottom: 18px">
			<el-col :span='24' style='text-align: center; font-size: 30px; color: yellow;'>欢迎来斗地主</el-col>
		</el-row>
		<el-row>
			<el-col :span="7">&nbsp;</el-col>
			<el-col :span="10" style='align-content: center;padding: 21px;'>
				<el-form ref="form" name='loginForm'>
					<el-form-item style='text-align: center;margin:0px;font-size:20px; color: white;'>
						登陆
					</el-form-item>
				  <el-form-item >
				    <el-input placeholder="请输入email" style='margin-bottom:15px' name='email'></el-input>
				    <el-input placeholder="请输入密码" type='password' name='pwd'></el-input>
				  </el-form-item>
				  <el-col :span="8" style="margin-left: 60px;">
				  <el-form-item style='text-align: center'>
				    <el-button type="primary" @click='login'>登陆</el-button>
				    </el-form-item>
				    </el-col>
				    <el-col :span="5" style="margin-left: 120px;">
				    <el-form-item>
				    <router-link to="/register">
				    	<el-button>注册</el-button>
				    </router-link>
				  </el-form-item>
				  </el-col>
				</el-form>
			</el-col>
			<el-col :span="4">&nbsp;</el-col>
		</el-row>
</div>
</template>

<script>
import {login} from '../vuex/actions/UserAction';  //导入注册
import {getLogin} from '../vuex/getters/UserGetter';

export default {
	data(){
		return{
			data:0
		}
	},
	  methods:{
	  	login:function(e){
	  		login(loginForm,this);
	  	}
	  },
      computed:{
        data:getLogin
      }
}
</script>
