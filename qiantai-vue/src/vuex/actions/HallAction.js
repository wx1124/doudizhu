import {axGet} from '../../common/HttpBean'

export function getRoomList(thisa){
//		axGet('http://localhost:3000/hall/getRoomList',{},function(res){
//			alert(res.data);
//			},function(err){
//				alert(err);
//		});
        //跨域访问 session请求
		axGet('/api/hall/getRoomList',{},function(res){
			alert(res.data);
			},function(err){
				alert(err);
      });
};