<template>
<div>
  <h5>欢迎来到user用户界面</h5>
  <table border="1px" cellspacing="0">
    <tr>
      <th>id</th>
      <th>姓名</th>
      <th>年龄</th>
      <th>性别</th>
      <th>操作</th>
    </tr>
    <tr v-for="(user,index) in users" :key="index">
      <td>{{user.id}}</td>
      <td>{{user.name}}</td>
      <td>{{user.age}}</td>
      <td>{{user.gender}}</td>
      <td><a href="javascript:void(0)" @click="shan(index)">删除</a>|
        <router-link :to="`/detail?id=${user.id}&name=${user.name}`">查看详情</router-link></td>
    </tr>
  </table>
  <hr>
  <table>
    <tr>
      <td>用户名：</td>
      <td><input type="text" v-model="name"> </td>
    </tr>
    <tr>
      <td>年龄：</td>
      <td><input type="text" v-model="age"> </td>
    </tr><tr>
    <td>性别：</td>
    <td><input type="text" v-model="gender"> </td>
  </tr>
  </table>
  <input type="button" value="添加用户" @click="adds">
</div>
</template>

<script>
import Detail from "./Detail";

export default {
  name: "User",
  detail:Detail,
  data(){
    return {
      users:JSON.parse(localStorage.getItem('users')),
      //   [
      //   {id:1,name:'王超',age:21,gender:'男'},
      //   {id:2,name:'林强',age:25,gender:'男'},
      //   {id:3,name:'樊璟',age:18,gender:'男'},
      //   {id:4,name:'高锦飞',age:30,gender:'男'},
      // ],
      name:'',
      age:"",
      gender:'',
    }
  },
  methods:{
    shan(index){
      this.users.splice(index,1);
      localStorage['users'] = JSON.stringify(this.users);
    },
    adds(){
      console.log(this.users)
      if (this.users===null){
        localStorage['users'] = JSON.stringify([{id:1,name: this.name,age: this.age,gender: this.gender}]);
        this.users = [{id:1,name: this.name,age: this.age,gender: this.gender}];
      }else {
        this.users.push({id:this.users.length+1,name: this.name,age: this.age,gender: this.gender});
        localStorage['users'] = JSON.stringify(this.users);
      }
      this.name = this.age = this.gender = '';


    }
  }

}
</script>

<style scoped>

</style>
