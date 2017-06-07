import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);   //vuex 初始化

let userStore = new Vuex.Store({   //
	state:{        //存储空间
		loginbean:null   //存储单元
	},
	mutations:{    //事件响应，修改存储的方法集
		zhuce:function(state,data){
			state.loginbean = data;
			alert('store中收到参数:'+data);  //res.data 传过来的参数
		},
		login:function(state,data){
			state.loginbean = data;
			alert('store中收到参数:'+data); //res.data 传过来的参数
		}
	}

});

export default userStore;