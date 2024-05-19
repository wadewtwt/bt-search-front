<template>
  <div id="app">
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="12" >
        <div class="grid-search bg-purple">
          <el-input v-model="input" placeholder="请输入内容" class="search-input"></el-input>
          <el-button type="primary" class="search-button">
            <el-icon ><search /></el-icon>
            搜索
          </el-button>
        </div>
      </el-col>
    </el-row>

    <el-row type="flex" justify="center" align="middle" class="contentListDiv">
      <el-col :span="11" >
        <el-descriptions  :title="contentTitle" :column="3">
          <el-descriptions-item ><el-icon color="#409efc" :size="25"><Film /></el-icon></el-descriptions-item>
          <el-descriptions-item ><b>哥斯拉大战金刚2：帝国崛起 电影 爱分享</b></el-descriptions-item>
          <el-descriptions-item >
            <el-tag >2.3G</el-tag>
          </el-descriptions-item>
          <el-rate v-model="valueScore" clearable />
          <el-descriptions-item label="推荐指数">
            <el-rate v-model="valueScore" clearable />
          </el-descriptions-item>

          <el-descriptions-item >
            点击数：23
          </el-descriptions-item>
        </el-descriptions>
      </el-col>
      <el-col :span="1" >
        豆瓣传送门<el-icon ><Promotion /></el-icon>
      </el-col>
    </el-row>

  </div>

</template>

<script>
// @ is an alias to /src
import { Film } from '@element-plus/icons-vue'

export default {
  components: {
    Film
  },
  data () {
    return {
      valueScore: 2.1,
      input: '123',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      contentTitle: '搜索结果共10条'
    }
  }
}
</script>

<style>

.grid-search{
  display: flex;
}
.search-input{
  height: 48px;
}
.search-button{
  height: 48px !important;
}

</style>
