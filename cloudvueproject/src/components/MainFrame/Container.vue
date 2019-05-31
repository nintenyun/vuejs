<template>
<div id="container">
<el-container>
      <el-header class="header">
        <vheader />
      </el-header>
      <el-container>
        <el-aside >
          <navmenu></navmenu>
        </el-aside>
        <el-main> 
          <transition name="fade">
              <router-view>  </router-view>
          </transition>
        </el-main>
      </el-container>
</el-container>
</div>
</template>

<script>
import NavMenu from '@/components/MainFrame/NavMenu'
import Header from '@/components/Header/Header'



export default {
  name: 'container',
  components: {
    'navmenu': NavMenu,
    'vheader': Header
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

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>