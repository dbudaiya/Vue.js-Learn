import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'//导入axios

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:3300'
new Vue({
  render: h => h(App),
}).$mount('#app')

//axios基本用法
axios({
  url: '/getProduct',
  method: 'GET'
}).then(result => {
  console.log(result.data)
})

//axios传参
axios({
  url: '/getProductById',
  params: {
    id: 1
  },
  method: 'GET'
}).then(result => {
  console.log(result.data)
})

//axios发送并发请求
axios.all([axios({
  url: '/getProduct',
  method: 'get'
}), axios({
  url: '/getProductById',
  params: {
    id: 2
  },
  method: 'get'
})]).then(results => {
  console.log(results)
})

//调用axios中的spread方法分割数组数据
axios.all([axios({
  url: '/getProduct',
  method: 'get'
}), axios({
  url: '/getProductById',
  params: {
    id: 2
  },
  method: 'get'
})]).then(axios.spread((res1, res2) => {
  console.log(res1)
  console.log(res2)
}))

//创建对应的axios的实例
const instance01 = axios.create({
  baseURL: 'http://localhost:3300'
})

instance01({
  url: '/getProduct'
}).then(res => {
  console.log(res.data.message)
})

instance01({
  url: '/getProductById',
  params: {
    id: 3
  }
}).then(res => {
  console.log(res.data.message)
})

//封装 request 模块
import {request} from './network/request'

// request({
//   url:'/getProduct'
// },res => {
//   console.log(res)
// },err => {
//   console.log(err)
// })

request({
  url:'/getProduct'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})