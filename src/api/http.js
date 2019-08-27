import axios from 'axios'
const config = {
    timeout: 30000
}
const http = axios.create(config)
// request 拦截器
http.interceptors.request.use(
    config => {
        // 基于eeg框架的安全验证
        // config.headers['x-csrf-token'] = Cookies.get("csrfToken")
    //   if (store.getters.userInfo.token) {
       
    //   }
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )
  
  // respone 拦截器
  http.interceptors.response.use(
    response => {
      if (response.status === 200) {
        return Promise.resolve(response)
      } else {
        console.log(response.status);
        return Promise.reject(response)
      }
      // console.log(response) 
      // const res = response.data
      // if (res.error) {
      //   console.log('res.error')
      //   tools.notify({
      //     type: 'error',
      //     message: res.error.message
      //   })
      //   if (res.code === '') {
      //     // 接口自定义错误代码
      //     // 移除登陆token 显示接口错误消息
      //   }
      //   return Promise.reject(res)
      // }
      // return Promise.resolve(res)
    },
    error => {
      alert('连接失败')
      return Promise.reject(error)
    }
  )
  
  export default http
  