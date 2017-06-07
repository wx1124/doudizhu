<template>
<div class="container">
	  <el-row>
      <el-col :span="7">&nbsp;</el-col>
      <el-col :span="10" style='align-content: center;padding: 21px;'>
        <el-form ref="form" name='zhuceForm'>
          <el-form-item style='text-align: center;margin:0px;font-size:20px; color: white;'>
            注册
          </el-form-item>
          <el-form-item >
            <el-input placeholder="请输入email" class='elInputClass' name='email'></el-input>
            <el-input placeholder="请输入密码" type='password' class='elInputClass' name='pwd'></el-input>
            <el-input placeholder="请再次输入密码" type='password' class='elInputClass' name='repwd'></el-input>
            <el-input placeholder="请输入昵称" class='elInputClass' name='nicheng'></el-input>
          </el-form-item>
           <el-col :span="8" style="margin-left: 60px;">
          <el-form-item style='text-align: center'>
            <el-button type="primary" @click='register'>注册</el-button>
            </el-form-item>             <!-- 点击事件 -->
            </el-col>
            <el-col :span="5" style="margin-left: 120px;">
            <el-form-item>
            <router-link to="/">
              <el-button>返回登陆</el-button>
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
import {zhuce} from '../../vuex/actions/UserAction';  //导入注册
import {getZhuce} from '../../vuex/getters/UserGetter'

export default{  //响应方法
    methods:{
      register:function(e){
        zhuce(zhuceForm,this);//传注册表单


         // axPost('http://localhost:3000/users/zhuce',$(zhuceForm).serialize(),function(res){
         //      alert(res.data);
         //    },function(err){
         //      alert(err);
         // }); 


          // let  formObj = {};
          //   formObj.email = zhuceForm.email.value;
          //   formObj.pwd = zhuceForm.pwd.value;
          //   formObj.nicheng = zhuceForm.nicheng.value;
            // axios.post('http://localhost:3000/users/zhuce',$(zhuceForm).serialize()) //创建服务端
            // .then(function(res){
            //   alert(res.data);
            // })
            // .catch(function(err){
            //   alert(err);
            // });
      }
    },
      computed:{
        data:getZhuce
      }
  }
</script>

<style>
  .elInputClass{
    margin-bottom:15px;
  }
</style>