import {axPost} from '../../common/HttpBean'
import userStore from '../stores/userStore'  

export function zhuce(form,thisa){
	axPost('api/users/zhuce',$(form).serialize(),function(res){
              //alert(res.data);            // jQuery
              if(res.data==1){
              	thisa.$router.push('/gamehill');
              	return;
              }
              userStore.commit('zhuce',res.data);//抛出  用zhuce方法来响应  可赋值
              //调用存储 使用commit 
            },function(err){
              alert(err);
         }); 
};
export function login(form,thisa){
	axPost('api/users/login',	$(form).serialize(),function(res){
			if(res.data==1){
				thisa.$router.push('/gamehill');
				return;
				//alert('登录成功');
			}
			else{
				alert('账号/密码错误');
			}
              //alert(res.data);
              //userStore.commit('login',res.data);//抛出  用zhuce方法来响应  可赋值
              //调用存储 使用commit 
            },
            function(err){
              alert(err);
         	}); 
};