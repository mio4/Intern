<template>
  <div id="test_table">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<script type="text/javascript">
  export default{
    name: "test_table",
    data(){
      return{
        message:"测试表格"
      }
    }
  }
</script>

