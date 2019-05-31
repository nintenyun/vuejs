<template>
<div>
  <div>
<el-row  :gutter="24">
  <el-col :span="2">  <el-button type="info" plain>提交待审核</el-button></el-col>
  <el-col :span="2">  <el-button type="warning" plain>已审待发布</el-button></el-col>
  <el-col :span="2">  <el-button type="danger" plain>已发布官网</el-button></el-col>
  <el-col :span="2">  <el-button type="danger" plain>历史发布</el-button></el-col>
  <el-col :span="2" :offset="12">      
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
     <el-table-column    min-width="10%"
      label="Job ID"
      prop="jid">
    </el-table-column>
    <el-table-column min-width="15%"
      label="Job Title"
      prop="jt">
    </el-table-column>
    <el-table-column min-width="10%"
      label="发布人"
      prop="name">
    </el-table-column>
    <el-table-column min-width="10%"
      label="发布日期"
      prop="date">
    </el-table-column>
    <el-table-column
      label="状态"  min-width="10%"
      prop="status">
    </el-table-column>
        <el-table-column min-width="15%"
      label="file path"
      prop="filename">
    </el-table-column>
    <el-table-column  min-width="25%"
      align="right"> 
      <template slot-scope="scope">    
        <el-button
          size="mini" 
          @click="openDialog(scope.$index, scope.row)">Edit</el-button>
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

  export default {
    
    components: {
     'logout':Logout
    },
    data() {
      return {      
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          jt: 'Software Engineer',
          jid: 1,
          status:'已发布',
          filename:'job_1.html'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          jt: 'Digital IC Design Intern',
          jid: 2,
          status:'已审核' ,
          filename:'job_2.html'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          jt: 'BSP software Engineer',
          jid: 3,
          status:'未审核',
           filename:'job_3.html'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          jt: 'ASP.NET软件开发实习生',
          jid: 4,
          status:'未审核',
          filename:'job_4.html'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          jt: 'ASP.NET软件开发实习生',
          jid: 5,
          status:'未审核',
          filename:'job_5.html'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          jt: 'ASP.NET软件开发实习生',
          jid: 4,
          status:'未审核',
          filename:'job_4.html'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          jt: 'ASP.NET软件开发实习生',
          jid: 5,
          status:'未审核',
          filename:'job_5.html'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          jt: 'ASP.NET软件开发实习生',
          jid: 4,
          status:'未审核',
          filename:'job_4.html'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          jt: 'ASP.NET软件开发实习生',
          jid: 5,
          status:'未审核',
          filename:'job_5.html'
        }],
        search: '',
        loading: false
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      openDialog(index,row){
        this.dialogVisible = true;
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