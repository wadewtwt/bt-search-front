<template>
  <div class="container" id="app">

    <el-row>
      <el-col :span="24" class="inline-elements">
        <span>
          <img src="static/img/logo.jpg" style="width: 100px" alt="导航盘">
        </span>
        <span class="gradient-color">导航盘</span>
      </el-col>
    </el-row>

    <div class="d-grid my-5 gap-2 d-flex justify-content-center">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="" @keyup.enter="initSearch()" v-model="keyword">
        <button class="btn btn-primary" @click="initSearch()">搜索</button>
      </div>
    </div>
    <div class="my-5 mx-auto">
      <ol class="list-group list-group-flush">
        <a v-for="item in searchResult" :href="item.url" target="_blank"
           class=" list-group-item list-group-item-action " aria-current="true" style="text-align: left">
          <div class="ms-2 align-items-start" style="text-align: start;">
            <template v-if="searchResult.length > 0" class="container">
              <div class="row">
                <div class="row col-md-11">
                  <div >
                    <span class="col-md-6">
                      <b class="card-title" v-html="item.title"></b>
                    </span>
                    <span class="col-md-3">
                      <small>
                        {{ item.fileType }}
<!--                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-square" viewBox="0 0 16 16">-->
<!--                          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>-->
<!--                          <path d="M5.795 12.456A.5.5 0 0 1 5.5 12V4a.5.5 0 0 1 .832-.374l4.5 4a.5.5 0 0 1 0 .748l-4.5 4a.5.5 0 0 1-.537.082"/>-->
<!--                        </svg>-->
                      </small>
                    </span>
                  </div>
                  <div >
                    <small class="col-md-3">更新时间：{{ item.updateTime }}</small>
                    <small class="col-md-3">热度：{{ item.hot }}</small>
                    <small class="col-md-3">

                    </small>
                    <small class="col-md-2">热度：99</small>
                  </div>

                </div>
                <div class="row col-md-1">
                  <img data-v-0a74efeb="" src="https://pan.quark.cn/favicon.ico" alt="夸克" style="width: 60%; height: 60%">
                </div>
              </div>

            </template>
          </div>
        </a>
      </ol>
    </div>

    <div style="display: flex; justify-content: center; align-items: center;">
      <el-pagination
        v-if="total > 0"
        background
        layout="prev, pager, next"
        :current-page="pageNo"
        :total="total"
        @current-change="handlePageChange"
      ></el-pagination>
    </div>


    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div class="col-md-4 d-flex text-center" style="margin-left: 4px">
        <span class="mb-3 mb-md-0 text-muted  text-center">© 2022 Zhelper Team</span>
      </div>
    </footer>

  </div>

</template>

<script>
import {searchApi} from '@/api/resource'
import { ElLoading } from 'element-plus';


export default {
  data () {
    return {
      keyword: '',
      contentTitle: '搜索结果共10条',
      searchResult: [],
      total: 0,
      pageNo: 1,
      is_homepage: true,
      loadingInstance: null
    }
  },
  methods: {
    initSearch(){
      let initJumpUrl = "/?keyword=" + this.keyword + "&pageNo=1"
      window.location.href = initJumpUrl
    },
    search(){
      this.loadingInstance = ElLoading.service({
        //color:'#ff0000',
        fullscreen:true,
        lock:true,
        text:'加载中...',
        //spinner:'el-icon-loading',
        //customClass:'lb-loading-icon-cls',
        background:'rgba(0, 0, 0, 0.3)'
      });

      searchApi(this.keyword, this.pageNo).then(response => {

        this.searchResult = response.data.list
        this.total = response.data.total
        this.searchResult.map((item, index) => {
          if (this.keyword) {
            let replaceReg = new RegExp(this.keyword, "ig");
            let replaceString = `<span style="color: #0066FF">${this.keyword}</span>`;
            this.searchResult[index].title = item.title.replace(replaceReg, replaceString);
          }
        });
        this.loadingInstance.close();
      })

    },
    handlePageChange(pageNum) {
      this.pageNo = pageNum;

      console.log("handlePageChange now pageNo is:")
      console.log(this.pageNo)
      console.log(this.keyword)
      let jumpUrl = "?keyword=" + this.keyword + "&pageNo=" + this.pageNo
      console.log(jumpUrl)

      window.location.href = jumpUrl
    }
  },
  created () {
    var arrUrl = [
      'static/js/bootstrap.bundle.min.js'
    ]
    let i
    for (i = 0; i < arrUrl.length; i++) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = arrUrl[i]
      document.body.appendChild(script)
    }
  },
  mounted() {
    console.log("now host:" + window.location.hostname)
    const params = new URLSearchParams(window.location.search);
    let urlKeyword = params.get('keyword');
    let urlPageNo = params.get('pageNo');
    if (urlKeyword !== null || urlPageNo !== null){
      this.keyword = urlKeyword
      this.pageNo = parseInt(urlPageNo)
    }
    console.log("init urlKeyword:" + urlKeyword + " and urlPageNo:" + urlPageNo)

    this.search()
  }
}
</script>

<style>
ol:hover{
  cursor: pointer;
}
.gradient-color{
  font-size: 30px;
  background: linear-gradient(to right, #1D97E4, #fdfdff);
  -webkit-background-clip: text;
  color: transparent;
}
.inline-elements{
  display: inline-block;
}
@import '../static/css/css.css';
@import "../static/css/semi.min.css";
@import "../static/css/bootstrap.min.css";
</style>
