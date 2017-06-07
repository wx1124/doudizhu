import axios from 'axios'; //插件

export function axPost(url,formObj,sucFun,failFun=function(err){}){
	axios.post(url,formObj) //创建服务端
        .then(function(res){
          sucFun(res);
        })
        .catch(function(err){
          failFun(err);
        });
}
export function axGet(url,formObj,sucFun,failFun=function(err){}){
	axios.get(url,formObj) //创建服务端
        .then(function(res){
          sucFun(res);
        })
        .catch(function(err){
          failFun(err);
        });
}