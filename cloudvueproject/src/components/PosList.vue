<template>
<div>
<pd :dialogVisible="dialogVisible" :postitle="postitle"   v-on:listenchildevent="showMsgFromChild"></pd>
  <div>
<el-row  :gutter="24">
  <el-col :span="2">  <el-button type="success" plain @click="getContent(1)">未提交审核</el-button></el-col>
  <el-col :span="2">  <el-button type="info" plain  @click="getContent(2)">提交待审核</el-button></el-col>
  <el-col :span="2">  <el-button type="warning" plain>已审待发布</el-button></el-col>
  <el-col :span="2">  <el-button type="danger" plain>已发布官网</el-button></el-col>
  <el-col :span="2">  <el-button type="danger" plain>历史发布</el-button></el-col>
  <el-col :span="2" :offset="10">      
      <logout></logout>
</el-col>
</el-row>
          
  </div>
  <el-table 
    v-loading="loading"
    element-loading-text="Loading Data"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%;margin:10px">
     <el-table-column    min-width="5%"
      label="Job ID"
      prop="id">
    </el-table-column>
    <el-table-column min-width="15%"
      label="Job Title"
      prop="title">
    </el-table-column>
    <el-table-column min-width="10%"
      label="发布人"
      prop="publisher">
    </el-table-column>
    <el-table-column min-width="10%"
      label="发布日期"   prop="publish_date"
     >
    </el-table-column>
    <el-table-column
      label="状态"  min-width="10%"
      prop="status">
    </el-table-column>
        <el-table-column min-width="15%"
      label="file path"
      prop="file_path">
    </el-table-column>
    <el-table-column  min-width="25%"
      align="right"> 
      <template slot-scope="scope">    
        <el-button
          size="mini" 
          @click="openDialog(scope.$index, scope.row.id,scope.row.title)">Edit</el-button>
           <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Submit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
    </div>
</template>


<script>

import Logout from '@/components/Logout'
import axios  from 'axios'
import moment from "moment"
import PD from '@/components/PosList_Detail'

  export default {
    
    components: {
     'logout':Logout,
     'pd':PD
    },
    data() {
      return {      
        tableData:[],
        search: '',
        loading: false,
        dialogVisible:false,
        postitle:''
      }
    },
   created:function(){
      this.getContent(1);
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      openDialog(index,id,title){
        this.dialogVisible = true;
        this.postitle = title;
      },
      getContent(s){
        switch(s)
        {
          case 1:
             var _this = this;
             _this.loading = true;
             axios({method:'get',
                  url:'api/values'
                }).then(function(resp){
                  _this.tableData = resp.data;
                      _this.loading = false;
               }).catch(resp => {
                 console.log('请求失败：'+resp.status+','+resp.statusText);
                     _this.loading = false;
               });
          case 2:
              this.tableData = [];
                 
        }
       
      },
         showMsgFromChild(isvisible){
          this.dialogVisible = isvisible;
        }
    },
    filters:{
      dateFrm:function(el){
        return moment(el).format('YYYY-MM-DD');
      }
    }
  }
</script>


<style>
  .el-row {
    margin-bottom: 20px;
   
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>