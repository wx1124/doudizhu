<template>
	<div class="game">
	<el-row style="margin-bottom: 18px">
			<el-col :span='6'>
				<levelnav/>
			</el-col>
			<el-col :span='18'>
			    <roomlist/>
			</el-col>
	</el-row>
	</div>
</template>
<script>
import {getRoomList} from '../../vuex/actions/HallAction'
import Levelnav from './Levelnav'
import RoomList from './RoomList'

export default {
		mounted:function(){ 
       		//axios向服务器发请求,获取房间列表
       		getRoomList(this);
  		},
  		components:{
  			levelnav:Levelnav,
  			roomlist:RoomList
  		}
	}
</script>