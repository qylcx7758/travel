<template>
  <div class="content-box container-fluid loginpage" style="padding-top:100px">
<form action="login.php" method="post">
			<div class="modal-dialog"  >
				<!--在中间显示-->
				<div class="modal-content"><!--加入框-->
			<div class="modal-header">{{title}}
			<!--<button type="button" class="colse" data-dismiss="modal"></button>-->
			</div>
			<div class="modal-body">
				<span>账号：</span>
				<input type="text" class="form-control c1" id="c1" v-model="memberss.member_name"/>
				<div class="alert alert-warning">{{msg}}
					<button class="close" data-dismiss="alert">&times;</button>
				</div>
				<span>密码：</span>
				<input type="text" class="form-control c2" id="c2" v-model="memberss.password"/>
				<div class="alert alert-warning">{{msg}}
					<button class="close" data-dismiss="alert" style="position:relative;">&times;</button>
				</div>
			</div>
			<div class="modal-footer">
				<!--默认在右边显示-->
				<input type="button" class="btn btn-default" @click="goRegister" data-dismiss="modal" value="注册" />
				<input type="button" class="btn btn-primary" @click="login" value="登录" />
</div>
			</div>
			</div>
      </form>
<br>
  <br>
   <br>
    <br>
     <br>
     <br>
  <br>
   <br>
    <br>
     <br>
     <br>
  <br>
   <br>
    <br>
     <br>
  </div>
 
</template>
<script>
  import router from '../router/index'
  import axios from 'axios'
  export default {
    name: 'loginpage',
    data() {
      return {
        title: '欢迎，登录！',
        memberss:{
          member_name:"",
          password:""
        },
        msg:"",
        member_id:"",
        member_name:""
      }
    },
    methods: {    
      login(){
             var querystring = require('querystring')
        axios.post('http://127.0.0.1:3003/loginPD',querystring.stringify(this.memberss))
             .then((response) => {
              console.log('判断',response.data)
              this.msg = response.data.msg
              this.member_id = response.data.member_id
              this.member_name = response.data.member_name
              console.log('??',this.member_id)
               var userId = this.member_id 
                window.localStorage.setItem("userId",userId)   
              var username = this.member_name
                window.localStorage.setItem("username",username)
                
                console.log('..',userId)
              if(this.msg == "登录成功"){   
                    router.push({name:'HelloWorld'})
        
            
              }
            }).catch((error) => {
              console.log(error)
            })
          
        },
        goRegister(){
        router.push({name:"register"})
      }
      }
      
      
    
  
  }

</script>

<style>
h1{
  color:#FFFFFF;
  font-family: helvetica,"华文新魏"
}
.loginpage{
    background-image: url(../../static/images/iloving.gif);
}
.modal-dialog{
  margin-top: 50px;
}
button{
  width:40%;

}

</style>