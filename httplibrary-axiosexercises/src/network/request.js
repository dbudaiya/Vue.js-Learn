import axios from 'axios'

//利用instance中自带的promise进行封装
export function request(config) {
    //1.创建axios的实例
    const instance = axios.create({
        baseURL: 'http://localhost:3300'
    })

    //2.axios的拦截器
    //2.1请求拦截的作用
    //1.比如config中的一些信息不符合服务器的要求
    //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    //3.某些网络请求（比如登陆（token））,必须要携带一些特殊的信息
    instance.interceptors.request.use(config => {
        console.log(config)
        return config
    }, err => {
        console.log(err)
    })
    //2.2响应拦截
    instance.interceptors.response.use(res => {
        // console.log(res)
        return res.data
    }, err => {
        console.log(err)
    })

    //3.发送真正的网路请求
    return instance(config)
}



//利用promise进行封装
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         //1.创建axios的实例
//         const instance = axios.create({
//             baseURL: 'http://localhost:3300'
//         })

//         // 发送真正的网路请求
//         instance(config).then(res => {
//             resolve(res)
//         }).catch(err => {
//             reject(err)
//         })
//     })

// }


//利用回调函数封装的方法
// export function request(config,success,failure){
//  //1.创建axios的实例

//  const instance = axios.create({
//      baseURL:'http://localhost:3300'
//  })

//  // 发送真正的网路请求
//  instance(config).then(res => {
//      success(res)
//  }).catch(err => {
//      failure(err)
//  })

// }