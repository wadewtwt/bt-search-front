<template>
  <div class="container" id="app">
    <nav class="navbar navbar-expand-lg  navbar-light">
      <div class="container-fluid">
        <b>zhelper search</b>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
               viewBox="0 0 24 24">
            <path fill="currentColor" d="m12 15.375l-6-6l1.4-1.4l4.6 4.6l4.6-4.6l1.4 1.4Z" />
          </svg>
        </button>

        <div class="collapse navbar-collapse pull-right" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                 data-bs-toggle="dropdown" aria-expanded="false">
                <!-- {{language.api}} -->
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                     preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                  <path fill="currentColor"
                        d="m917.7 148.8l-42.4-42.4c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-76.1 76.1a199.27 199.27 0 0 0-112.1-34.3c-51.2 0-102.4 19.5-141.5 58.6L432.3 308.7a8.03 8.03 0 0 0 0 11.3L704 591.7c1.6 1.6 3.6 2.3 5.7 2.3c2 0 4.1-.8 5.7-2.3l101.9-101.9c68.9-69 77-175.7 24.3-253.5l76.1-76.1c3.1-3.2 3.1-8.3 0-11.4zM769.1 441.7l-59.4 59.4l-186.8-186.8l59.4-59.4c24.9-24.9 58.1-38.7 93.4-38.7c35.3 0 68.4 13.7 93.4 38.7c24.9 24.9 38.7 58.1 38.7 93.4c0 35.3-13.8 68.4-38.7 93.4zm-190.2 105a8.03 8.03 0 0 0-11.3 0L501 613.3L410.7 523l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3L441 408.6a8.03 8.03 0 0 0-11.3 0L363 475.3l-43-43a7.85 7.85 0 0 0-5.7-2.3c-2 0-4.1.8-5.7 2.3L206.8 534.2c-68.9 69-77 175.7-24.3 253.5l-76.1 76.1a8.03 8.03 0 0 0 0 11.3l42.4 42.4c1.6 1.6 3.6 2.3 5.7 2.3s4.1-.8 5.7-2.3l76.1-76.1c33.7 22.9 72.9 34.3 112.1 34.3c51.2 0 102.4-19.5 141.5-58.6l101.9-101.9c3.1-3.1 3.1-8.2 0-11.3l-43-43l66.7-66.7c3.1-3.1 3.1-8.2 0-11.3l-36.6-36.2zM441.7 769.1a131.32 131.32 0 0 1-93.4 38.7c-35.3 0-68.4-13.7-93.4-38.7a131.32 131.32 0 0 1-38.7-93.4c0-35.3 13.7-68.4 38.7-93.4l59.4-59.4l186.8 186.8l-59.4 59.4z" />
                </svg>
                <span >{{language.apinotset}}</span>
                nihoa
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li v-if="noapi" class="dropdown-item">
                  {{language.noapi}}
                </li>
                <li  class="dropdown-item" >
                  ssssssssss
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/zhelper-org/search-page"><svg
                xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
              </svg></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="d-grid gap-2 d-flex justify-content-center">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="" @keyup.enter="search" v-model="keyword">
        <button class="btn btn-primary" @click="search">搜索</button>
      </div>
    </div>
    <div class="my-5 mx-auto">
      <ol class="list-group list-group-flush">
        <a v-for="result in search_result" @click="getDetail(result)"
           class=" list-group-item list-group-item-action " aria-current="true" style="text-align: left">
          <div class="ms-2 align-items-start" style="text-align: start;">
            <template v-if="result.info">
              <b class="card-title">111111</b>
              22222
              <small>
                3333333333
              </small>
            </template>
          </div>
        </a>
      </ol>
    </div>
<!--    <nav aria-label="Page navigation example" v-if="search_result.length">-->
<!--      <ul class="pagination justify-content-center">-->
<!--        <li v-if="page-1" class="page-item">-->
<!--          <a class="page-link" href="#" @click="change_page(-1)">前一页</a>-->
<!--        </li>-->
<!--        <li class="page-item"><a class="page-link" href="#">{{page}}</a></li>-->
<!--        <li v-if="page!= total_page" class="page-item">-->
<!--          <a class="page-link" href="#" @click="change_page(1)">后一页</a>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </nav>-->

    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div class="col-md-4 d-flex text-center" style="margin-left: 4px">
        <span class="mb-3 mb-md-0 text-muted  text-center">© 2022 Zhelper Team</span>
      </div>
    </footer>

  </div>

</template>

<script>

export default {

  data () {
    return {
      valueScore: 2.1,
      keyword: '123',
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
      contentTitle: '搜索结果共10条',
      language: {
        changeapi: '切换API',
        home: '返回首页',
        doc: '查看文档',
        title: '书名',
        author: '作者',
        publisher: '出版社',
        year: '出版时间',
        filesize: '文件大小',
        extension: '文件类型',
        source: '书源',
        info: '信息',
        noapi: '无可用API',
        apinotset: '未指定API',
        direct_url: '直达链接',
        download_links: '下载链接'
      },
      search_result: [
        {
          info: true,
          source: 'sourceeee',
          author: 'authorrrrrr',
          title: 'titleeeee',
          publisher: 'publisher',
          isbn: 'publisher',
          extension: 'publisher'
        }
      ],
      total_page: 1,
      page: 1,
      noapi: false,
      is_homepage: true
    }
  },
  methods: {
    getDetail () {
      console.log(this.keyword)
    }
  },
  created () {
    var arrUrl = [
      'static/js/adsbygoogle.js',
      'static/js/axios.min.js',
      'static/js/bootstrap.bundle.min.js'
    ]
    let i
    for (i = 0; i < arrUrl.length; i++) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = arrUrl[i]
      document.body.appendChild(script)
    }
  }
}
</script>

<style>
@import '../static/css/css.css';
@import "../static/css/semi.min.css";
@import "../static/css/bootstrap.min.css";
</style>
