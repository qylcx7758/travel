<template>

  <div class="container">

    <div class="row">
      <div class="col-lg-1">
        <img src="../../static/images/logo.jpg"/>
      </div>
      <div class="col-lg-4">
        <ul class="header_nav">
          <li>个人信息</li>
          <li>订单</li>
          <li>消息</li>
        </ul>
      </div>
    </div>
    <hr/>
    <!--第一个内容部分-->
    <div class="row">
      <div class="col-lg-2 content_left">
        <div class="first">常用旅客</div>
        <div class="second">账号绑定</div>
      </div>
      <div class="col-lg-6 content_right">
        <div class="row">
          <div class="col-lg-2">
             <img src="../../static/images/cwj.jpg" style="width:150px;height:150px;"/>
          </div>
          <div class="col-lg-4">
            <ul class="content_body" v-for="item in information" :key="item.id">
              <li>昵称:{{item.username}}</li>
              <li>用户名:</li>
              <li>生日: </li>
              <li>性别:</li>
              <li>安全等级:</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
<!-- 安全登陆 -->
    <div class="row">
       <div class="col-lg-6 content_second">
          <p class="text">安全设置</p>
          <ul class="safe_setting">
            <li>oooo</li>
          </ul>
      </div>
    </div>
  <!--登陆历史 -->
  <div class="row">
    <div class="col-lg-6 content_second">
      <p class="text">登陆历史</p>
      <table>
        <thead>
          <tr>
            <th>日期</th>
            <th>时间</th>
            <th>地点</th>
            <th>设备</th>
          </tr>
          <tr>
            <td>2017年11月20日</td>
            <td>09:16:44</td>
            <td>长沙</td>
            <td>电脑：Chrome@Windows 10</td>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import router from '../router/index'
import axios from 'axios'

export default {
  name: 'PersonalCenter',
  data(){
    return{
      title:'PersonalCenter',
      information:[] //存储个人信息
    }
  },
  created(){
    this.fetchData();
  },
  methods:{
    fetchData(){
      axios
        .get("http://127.0.0.1:3000/user")
        .then(response => {
          this.information = response.data;
          console.log(this.information);
        })
        .catch(error => {
          console.log(error)
        });
    },

  }

}

</script>

<style>
li{
  list-style: none;
}
  .header_nav{
    margin-top: 8px;
}
 .header_nav li{
    float: left;
    list-style: none;
    margin-left: 50px;
}
.content_left{
  border:1px solid #E8E8E8;
  width: 140px;
  height: 100px;
}
.first{
  width: 100%;
  height: 50px;
  font-family: '微软雅黑';
  font-size:'16px';
  text-align: center;
  line-height: 50px;
  border-bottom: 1px solid #E8E8E8;
}
.second{
  font-family: '微软雅黑';
  font-size:'16px';
  text-align: center;
  line-height: 50px;
}
.content_right{
   border:1px solid #E8E8E8;
}
.content_right:hover{
   border:1px solid blue;
}
.content_body{
   margin-left: 20px;
}
.content_body li{
   list-style: none;
   margin-top: 10px;
   font-family: '微软雅黑';
   font-size:'14px';
}
.content_second{
  border:1px solid #E8E8E8;
  margin-top:20px;
  margin-left: 190px;
}
.content_second:hover{
  border:1px solid blue;
}
.text{
   text-align: left;
   font-family: '微软雅黑';
}

</style>
