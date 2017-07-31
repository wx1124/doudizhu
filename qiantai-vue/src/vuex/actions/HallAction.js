import {axGet} from '../../common/HttpBean'
import userStore from '../stores/UserStore'
import SocketBean from '../../common/SocketBean'

export function getRoomList(thisa){
		axGet('/api/hall/getRoomList',{},function(res){
			//alert(res.data);
			thisa.roomList=res.data;
			},function(err){
				alert(err);
		});
};

export function newRoom(formObj,thisa){
		axGet('/api/hall/newroom?'+formObj,{},function(res){
			if(res.data.id){
				//跳进
				//thisa.$router.push('/room');
				thisa.$router.push({ path: '/room', query:res.data});
			}
			},function(err){
				alert(err);
		});
};

export async function enterRoom(room,thisa){
		let msg = await userStore.getLoginbean();//userStore.state.loginbean;
		msg.room = room;
		thisa.$router.push({ path: '/room', query:msg});
			
};

export function ready(){
	SocketBean.getSingleTon().sendReady();		
};

