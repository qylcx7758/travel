<template>
  <div class="hello">
    
		<div id="gray"></div>
		
		<div class="popup" id="popup">
			<div class="top_nav" id='top_nav'>
				<div align="center">
					<span>登录账号</span>
					<a class="guanbi"></a>
				</div>
			</div>
			<div class="min">
				<div class="tc_login">
					<div class="left">
						<h4 align="center">手机扫描</h4>
						<div align="center"><img src="../../static/images/erweima.jpg" width="150" height="150" /></div>
						<dd>
							<div align="center">扫描二维码登录</div>
						</dd>
					</div>  
					<div class="right">
						<form method="POST" name="form_login" target="_top">
							<div align="center">
								<a href="">短信快捷登录</a>
								<i class="icon-mobile-phone"></i>		
								<input type="text" name="name_a" id="name_a"  placeholder="用户名" autocomplete="off" class="input_yh" >
								<input type="password" name="pass_a" id="pass_a"  placeholder="密码" autocomplete="off" class="input_mm">
							</div>
							<dd>
								<div align="center"><a href="">遇到登录问题</a></div>
							</dd>
							<div align="center">
								<input type="button" class="button" title="Sign In" value="登录" id="login_user" @click="check"> 
							</div>
						</form>   
						<dd>
							<div align="center"><a href="#" target="_blank">立即注册</a></div>
						</dd>
						<hr align="center" />					
					</div>		
				</div>
			</div>
		</div>
  <div class="roof">
      <div class="roof_left" style="">
        <img class="logo" src="../../static/images/logo.jpg" alt="logo">
      </div>
      <div class="roof_right ">
      <button  class="btn btn-info btn-lg" @click="help">帮助</button>
      <!-- 帮助-->
			<ul class=" help" id="ohelp">       
          <li><a href="">俏旅行帮助</a></li>         
          <li class=""><button class="btn btn-info btn-block btn-lg rds">入门指南</button></li>
<li class=""><button class="btn btn-info btn-block btn-lg rds">如何退订？</button></li>
<li class=""><button class="btn btn-info btn-block btn-lg rds">怎样取消预定？</button></li>
<li class=""><button class="btn btn-info btn-block btn-lg rds">预定的价格是如何计算的？</button></li>			
        <li class=""><button class="btn btn-info btn-block btn-lg rds">访问帮助中心</button></li>       
        <li class=""><button class="btn btn-info btn-block btn-lg rds">提供反馈</button></li>
			</ul>	
<!-- 登录框 -->
        <button class="btn btn-info btn-lg" id="login_tc">登录</button>
        <button class="btn btn-info btn-lg" @click="goRegister()">注册</button>
        <div v-for="item in aUser" :key="item.id">
          <img :src='"http://127.0.0.1:3000/"+item.img' alt="用户头像" class='roof_img'/>
        </div>
         
 
      </div>
      </div>

<div class="declare">
        <h1>俏旅行</h1>
        <h2>爱旅行，爱上俏旅行</h2>
      </div>
			<div class="main">
      <div class="search">
        <label for="search" class="search_top">城市/房源</label>
        <input type="text" id="search" placeholder="请输入地址" class="search_site">
      <button class='btn btn-success'>搜索</button>
      </div>
      <h3 class="hot">热门目的地</h3>
      <div class="hot_site">
        <a href="#">大理</a>
        <a href="#">丽江</a>
        <a href="#">三亚</a>
				<a href="#">台北</a>
        <a href="#">长沙</a>
      </div>
       <ul class="house ">
        <li v-for="house in houses" :key="house.id">
          <img :src='"http://127.0.0.1:3000/"+house.image' alt="图片" class="home_img"/>
      {{house.house_name}}

        </li>
      </ul>
    </div>

  


	<div class="footer">
      <a href="#">关于我们</a>
      <a>tel:137xxxxxxx</a>
    </div>
		
  </div>

</template>

<script>
 import router from "../router/index";
import axios from "axios";
import'../assets/login.js';
export default {
  name: "HomePage",
  data() {
    return {
      title: "HomePage",
      houses: [], // 存储 
      user:[],
      aUser:[]
    };
  },
  created(){
    this.fetchData()
  },
  methods:{
    // 弹出帮助
    help(){
      console.log($("#ohelp"))
    $('#ohelp').toggle()
    },
    // 进入注册页面
    goRegister(){
      router.push({name:"Register"})
    },
    // 网页加载，渲染数据
    fetchData(){
      console.log(this)
      axios.get("http://127.0.0.1:3000/house")
      .then(response=>{
        this.houses=response.data;
        console.log(this.houses)       
      })
      .catch(error=>{
        console.log(error)
      })
    },
    // 登录用户的验证check
check(){
  console.log(this)
  axios.post("http://127.0.0.1:3000/user")
  .then(response=>{
this.users=response.data
console.log(this.users)
// 循环用户数组，并判断
// $.each(this.users,function(item,index){
// })

//选出符合条件的对象组,查出满足删选条件的
this.aUser=$.grep(this.users,function(item){
            return item.tel ==$("#name_a").val() && item.password==$("#pass_a").val();
        });
        console.log(this.aUser)
       if(this.aUser==""){
         alert("输入账户或者密码错误，请重新输入")
       }else{
        //  和router.push一个意思
        // window.location.href = "http://127.0.0.1:8080/#/Register"    
        //  router.push({name:""})
         router.push({name:"HomePage"})
       }
  })
  .catch(error=>{
    console.log(error)
  })
}


  }
}

	


</script>

  <style scoped src="../../static/css/style.css">
	</style>
 <style scoped src="../../static/css/demo.css">
 </style>
<style scoped src="../../static/css/nav.css">
 </style>
 <<style>
 .declare {
  position: absolute;
  left: 40px;
  top: 70px;
  /* background: yellow */
  color: red;
}

.main {
  padding: 20px;
  width: 95%;
  /* background: gainsboro; */
  left: 10px;
  height: 1300px;
  position: relative;
  top: 40px;
}

.search {
  width: 95%;
  height: 180px;
}

.search_top {
  height: 40px;
  position: relative;
  left: 60px;
  font-size: 30px;
  color: yellowgreen;
}

.search_site {
  position: relative;
  width: 60%;
  height: 40%;
  border-radius: 20px;
  top: 60px;
}

.menu {
  margin-left: 60px;
  width: 80%;
  height: 60px;
  background: brown;
}

.main ul {
  padding-top: 40px;
}

.main li {
  list-style: none;
  float: left;
  width: 30%;
  margin-right: 40px;
  margin-bottom: 80px;
}



.hot {
  position: relative;
  top: 20px;
}
.hot_site {
  position: relative;
  top: 30px;
  /* color: black */
}
.footer {
  position: relative;
  top: 100px;
  text-align: center;
  width: 100%;
  height: 40px;
  background: deepskyblue;
}
.home_img{
width:100%;
height:220px;
}

.hot_site a:visited{
color:black
}
.hot_site a:hover{
color:red
}

 </style>
 
 





