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
					
								<input type="text" name="name_a" id="name_a" required="required" placeholder="用户名" autocomplete="off" class="input_yh" >
						
								<input type="password" name="pass_a" id="pass_a" required="required" placeholder="密码" autocomplete="off" class="input_mm">
							</div>
							<dd>
								<div align="center"><a href="">遇到登录问题</a></div>
							</dd>
							<div align="center">
								<input type="submit" class="button" title="Sign In" value="登录">
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
      <button  class="btn btn-info " @click="help">帮助</button>
      <!-- 帮助-->
			<ul class=" help" id="ohelp">       
          <li><a href="">俏旅行帮助</a></li>         
          <li class=""><button class="btn btn-success btn-block">入门指南</button></li>
<li class=""><button class="btn btn-success btn-block">如何退订？</button></li>
<li class=""><button class="btn btn-success btn-block">怎样取消预定？</button></li>
<li class=""><button class="btn btn-success btn-block">预定的价格是如何计算的？</button></li>
			
        <li class=""><button class="btn btn-success btn-block">访问帮助中心</button></li>
        
        <li class=""><button class="btn btn-success btn-block">提供反馈</button></li>
			</ul>
		
<!-- 帮助 -->

        <button class="btn btn-info " id="login_tc">登录</button>



        <button class="btn btn-info " @click="goRegister()">注册</button>
        <img src="../../static/images/swkong.jpg" alt="用户头像" class='roof_img'/> 
    
      </div>
      </div>

 


		</div>
  </div>

</template>

<script>
 import router from "../router/index";
import axios from "axios";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },


  methods:{
    help(){
      console.log($("#ohelp"))
    //  $("#ohelp").css({
		// 			'display':'block'		
    // 		})
    $('#ohelp').toggle()
    },
    goRegister(){
      router.push({name:"Register"})
      // 注意大小写，名字是组件名
    }
  }
}
$(document).ready(function(){
  	$("#login_tc").click(function(){
			$("#gray").show();
			$("#popup").show();//查找ID为popup的DIV show()显示#gray
			tc_center();
		});
$("a.guanbi").click(function(){
			$("#gray").hide();
			$("#popup").hide();//查找ID为popup的DIV hide()隐藏
		})

		//窗口水平居中
		$(window).resize(function(){
			tc_center();
		});

		function tc_center(){
			var _top=($(window).height()-$(".popup").height())/2;
			var _left=($(window).width()-$(".popup").width())/2;
			
			$(".popup").css({top:_top,left:_left});
		}	
			$(".top_nav").mousedown(function(e){ 
				$(this).css("cursor","move");//改变鼠标指针的形状 
				var offset = $(this).offset();//DIV在页面的位置 
				var x = e.pageX - offset.left;//获得鼠标指针离DIV元素左边界的距离 
				var y = e.pageY - offset.top;//获得鼠标指针离DIV元素上边界的距离 
				$(document).bind("mousemove",function(ev){ //绑定鼠标的移动事件，因为光标在DIV元素外面也要有效果，所以要用doucment的事件，而不用DIV元素的事件 
				
					$(".popup").stop();//加上这个之后 
					
					var _x = ev.pageX - x;//获得X轴方向移动的值 
					var _y = ev.pageY - y;//获得Y轴方向移动的值 
				
					$(".popup").animate({left:_x+"px",top:_y+"px"},10); 
				}); 

			}); 

		$(document).mouseup(function() { 
				$(".popup").css("cursor","default"); 
				$(this).unbind("mousemove"); 
			});



		}) 

	



// #name,#pass{
// 	width:250px;
// }
// <style scoped src="../../static/css/style.css"></style>
</script>

  <style scoped src="../../static/css/style.css">
	</style>
 <style scoped src="../../static/css/demo.css">
 </style>
 <style>
 #name_a,#pass_a{
width:250px;
 }
 .roof {
  position: relative;
  top: -40px;
  left: 10px;
  background: paleturquoise;
  width: 95%;
  height: 180px;
  /* border: 1px solid green; */
}

.roof_img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  top: -40px;
  right:-200px;
  /* margin-left: 40px; */
}

.roof_right {
  float: right;
  position: relative;
  right: 80px
}

.roof_left {
  float: left;
}
.help{
border:1px solid red; 
display: none;
position:absolute;
/* top:20px; */
/* background:red */
}  
.help a:link{
  color: yellowgreen;
} 
.help a:hover{
  color: yellow;
}
.help li{
  background:gray; 
  border:1px solid gray;
  margin-bottom:2px;
}



.roof_right {
  float: right;
  position: relative;
  /* right: 20px */
}

.roof_left {
  float: left;
}
 </style>
 





