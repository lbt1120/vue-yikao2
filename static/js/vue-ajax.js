import axios from 'axios'
import qs from 'qs'
const api = '/index.php?i=6&c=entry&m=yi_kao&'

axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus(response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    console.log('页面未找到')
  }
  if (res.data && (!res.data.msg=='error')) {
    console.log('数据未请求到')
  }
  return res
}

export default {
  post(url, data) {
    return axios({
      method: 'post',
      baseURL: 'https://yikao.baolanbb.com/app/',
      url: api + url,
      data: qs.stringify(data),
      timeout: 1000000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (response) => {
        return response
      }
    ).then(
      (res) => {
        return res
      }
    )
  },
  get(url, params) {
    return axios({
      method: 'get',
      baseURL: 'https://yikao.baolanbb.com/app/',
      url: api + url,
      params, // get 请求时带的参数
      timeout: 1000000,
      dataType:"json",
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      }
    }).then(
      (response) => {
        return response
      }
    ).then(
      (res) => {
        return res
      }
    )
  }
}
