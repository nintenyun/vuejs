<template>
  <el-row class="tac">
  <el-col :span="24">
  <el-container style="height: 850px; border: 1px solid #eee">
  <el-aside width="100%" style="background-color: rgb(238, 241, 246)">
    <el-menu
      class="el-menu-vertical-demo"
      router
      unique-opened
      @open="handleOpen"
      @close="handleClose"
    
      background-color="#1e50a2"
      text-color="#fff"
      active-text-color="#ffd04b"
    
      >
    

      <el-submenu v-for="item in menu" :index="item.id" :key="item.id"   >
        <template slot="title">
          <i class="el-icon-circle-plus"></i><span v-text="item.name"></span>
        </template>
        <el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.componentName">
         <el-menu-item :index="sub.componentName" v-text="sub.name">
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
    </el-aside>
    </el-container>

  </el-col>
</el-row>
</template>

<style scoped>
  .over-hide{
    overflow: hidden;
  }
</style>

<script>
import menu from '@/config/menu-config'


  export default {
    data () {
      return {
        menu: menu,
        test:0 
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    },
    components: {
     
    }
  }
</script>