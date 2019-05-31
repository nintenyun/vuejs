<template>
<div >
<el-dialog title="编辑" :visible.sync="dialogVisible"  customClass="customWidth" :before-close="sendMsgToParent">
  <el-form  label-width="200px">
    <el-row :gutter="24">
        <el-col :span="10">
            <el-form-item label="Job Title"  >
        <el-input v-model="postitle" ></el-input>
      </el-form-item>
     </el-col>
      <el-col :span="10" >
        <el-form-item label="发布人" >
        <el-input v-model="publisher" ></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="24" >
        <el-form-item label="Responsibilities" >
        <el-input type="textarea" rows="6"  v-model="Responsibilities"></el-input>
      </el-form-item>
      
      </el-col>
            <el-col :span="24" >
        <el-form-item label="Essential Qualifications" >
        <el-input type="textarea" rows="6"  v-model="EQ"></el-input>
      </el-form-item>
         </el-col>
            <el-col :span="24" >
        <el-form-item label="Preferred Qualifications" >
        <el-input type="textarea" rows="6"  v-model="PQ"></el-input>
      </el-form-item>
      </el-col>
    </el-row>


 
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="sendMsgToParent">取 消</el-button>
    <el-button type="primary" @click="sendMsgToParent">确 定</el-button>
  </div>
</el-dialog>


</div>    
</template>



<script>
export default {
    data () {
     return{
        myflag: this.dialogVisible,
        publisher:this.publisher,
        Responsibilities:this.Responsibilities,
        EQ:this.EQ,
        PQ:this.PQ    
     }
    },
    props: ['dialogVisible','postitle'], 
    methods: {
      sendMsgToParent()
      {
          this.$emit("listenchildevent", this.myflag);
      }
    }
}
</script>


<style>
 .customWidth{
        width:1200px;
    }
</style>