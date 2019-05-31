<template>
<div> 
  <el-row :gutter="20">

  <el-col :span="2" :offset="21">
        
<el-dropdown  @command="handleCommand">
  <el-button type="primary" >
    Hi Cloud<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item :command="'logout'">Logout</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

  </el-col>
</el-row>

</div>
</template>


<script>

export default {
  data () {
      return {
     
      }
  },
  methods: {
      handleCommand()
      {
           this.$router.push('Login') 
      }
  }
}


</script>    


<style>

</style>