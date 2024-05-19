<template>
  <el-row>
    <el-col :span="12" :center="true">
      <div class="grid-content bg-purple">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-button type="primary">主要按钮</el-button>
      </div>

    </el-col>
  </el-row>

  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</template>

<script>
// @ is an alias to /src

export default {
  data () {
    return {
      input: '123'
    }
  }
}
</script>
