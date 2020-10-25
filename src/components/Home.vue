<template>

  <div>
    <h5>欢迎来到home主界面</h5>
    <hr>
    <h4>留言板</h4>
    <input type="text" v-model="note">
    <input type="button" value="上传留言" @click="commit">
    <ul>
      <li v-for="(not,index) in note_list" :key="index">{{not}}
      <button @click="shan(index)">删除</button>
      </li>
    </ul>
    <br>
    <span v-show="is_show">留言总数：{{note_list.length}}</span>
    <input type="button" value="删除所有" @click="both" v-show="is_show">
  </div>

</template>

<script>
export default {
  name: "Home",
  data(){
    return {
      note:'',
      note_list:JSON.parse(localStorage.getItem('notes')),
      is_show:localStorage.getItem('notes')==='[]' ? false : true,
    }
  },
  methods:{
    commit(){
      if (this.note){
        this.note_list.unshift(this.note);
        this.note = '';
        localStorage['notes'] = JSON.stringify(this.note_list);
        this.is_show = true;
      }
    },
    shan(index){
      this.note_list.splice(index,1);
      localStorage['notes'] = JSON.stringify(this.note_list);
      if (this.note_list.length===0){
        this.is_show = false;
      }
    },
    both(){
      this.note_list = [];
      localStorage['notes'] = '[]';
      this.is_show = false;
    }
  }
}
</script>

<style scoped>

</style>
