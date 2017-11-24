<template>
 <div class="container">
		<div class="row">
			<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
				<img src="../../static/images/logo.jpg" class="left_logo"/>
				<h3 class="left otitle">俏旅行账号注册</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
        		<label for="phone" class="left title">手机号:</label>
        		<input type="number" id="phone" placeholder="请输入手机号码" class="form-control" v-model="user.tel">
        		<span class="remark left">可用于激活码获取，密码找回与订单查询</span>
      		</div>
		</div>
		<div class="row">
			<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
        		<label for="password"class="left title">登陆密码:</label>
        		<input type="password" id="password"  placeholder="请输入登录密码" class="form-control" v-model="user.password">
            <span class="remark left">可用账户的登录</span>
      		</div>
		</div>
		<div class="row">
			<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
        		<label for="email" class="left title">邮箱:</label>
        		<input type="text" id="email" placeholder="请输入个人邮箱" class="form-control" v-model="user.email">
        		<span class="remark left">可用邮箱直接登陆与获取订单详情</span>
      		</div>
		</div>
		<div class="row">
			<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
        		<label for="yanzheng" class="left title">验证码:</label>
        		<input type="number" id="yanzheng" placeholder="验证码" class="form-control" >
      		</div>
		</div>
		<div class="row">
			<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
        		<input type="checkbox" id="checkbox">&nbsp&nbsp&nbsp
            <strong class="remark">我已经阅读并遵守<a class="xieyi" href="#">《俏旅行用户协议》</a></strong>	
      		</div>
		</div>
		<div class="row">
			<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 form-group">
        		<button class="btn btn-primary" @click="saveUser">同意协议并注册</button>
      		</div>
		</div>	
	</div>	

</template>

<script>
import router from "../router/index";
import axios from "axios";

export default {
  name: "Register",
  // 这个好像跟连接。点击跳转有关
  data() {
    return {
			msg: "Welcome to Register",
			user:{}
			// 注意，行间搭配v-model
    };
	},
	methods:{
	
saveUser(){
	// axios，把页面的注册信息传到服务器，两个参数
	 var querystring = require("querystring");
	axios.post(
		"http://127.0.0.1:3000/adduser",
		querystring.stringify(this.user)
	)
	.then(response=>{
		  console.log(response.data);
          router.push({ name: "HomePage" });
	})
	.catch(error=>{
		console.log(error);
	})
}
	}
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.container{
	background: yellowgreen;
}
body{
  background: yellowgreen;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.top_logo {
  margin-top: 20px;
  margin-left: 50px;
  border-bottom: 1px solid #e8e8e8;
}
.top_logo h3 {
  font-family: "微软雅黑";
  color: #000;
}
.remark {
  font-size: 14px;
  color: gray;
  /* float: left; */
}
.xieyi {
  font-size: 12px;
  color: blue;
}
.left{
  margin-top:10px;
  float:left;
  
}
.title{
  font-size:20px;
}
.otitle{
  font-size:36px;
  font-weight: bold;
  margin-bottom: 10px;
}
.left_logo{
  /* clear: both; */
  text-align: left;
  display:block;
  margin-bottom: 10px;
}
</style>
