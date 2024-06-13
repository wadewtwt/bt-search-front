import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/api/backend/dealer/list',
    method: 'post',
    data
  })
}

export function searchApi(keyword, pageNo) {
  return request({
    url: '/api/search',
    method: 'get',
    params: {
      "keyword" : keyword,
      "pageNo" : pageNo
    }
  })
}
