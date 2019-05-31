<template>
<div>
<el-container>
      <el-header class="header">
        <vheader />
      </el-header>
          <el-main >
              <el-form  label-width="100px" class="center_login_area" >
              <el-form-item label="用户名" >
                <el-input  v-model="username" ></el-input>
              </el-form-item>
              <el-form-item label="密码" >
                <el-input  v-model="password" ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="gohome">登录</el-button>
                <el-button @click="12">重置</el-button>
              </el-form-item>
            </el-form>
            </el-main>
       
</el-container>
</div>
</template>


<script>
import Header from '@/components/Header/Header'

export default {
   data () {
     return{
        username: this.username,
        password:this.password
     }
    },
  name: 'login',
  components: {
    'vheader':Header
  },
  methods: {
      gohome()
      {
         this.$router.push('PosList') 
      }
    }
}


</script>    


<style scoped>
.header {
  background-color:#1E2D66;
  color: #fff;
  line-height: 60px;
  height:120px!important;
}

.center_login_area
{
  width:20%;
  padding-top: 100px;
  margin:auto;
}

</style>