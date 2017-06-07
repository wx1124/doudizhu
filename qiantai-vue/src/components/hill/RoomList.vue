<template>
	<div>
		<el-button type="success" @click='openNewRoom' style='margin-right:300px;'>创建房间</el-button><br>
		<el-form ref="newRoomForm" name='newRoomForm' style='display: none;'>
		<br>
		<el-form-item style='text-align: center;margin: 0px;'>
		</el-form-item>
		  <el-form-item >
		  <el-col :span='8'>
		    <el-input placeholder="请设置密码" name='roompwd' style='margin-left:200px; float: left;'></el-input>
		    </el-col>
		  </el-form-item>
		  <el-form-item style='margin-right:300px;'>
		    <el-button type="primary" >确定</el-button>
		    <el-button @click="hideNewRoom">收起</el-button>
		    </el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		methods:{
			openNewRoom:function(){
				$(newRoomForm).show();
			},
			hideNewRoom:function(){
				$(newRoomForm).hide();
			}
		}
	}
</script>