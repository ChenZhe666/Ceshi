import axios from 'axios'
// import router from '../router'
const service = axios.create({
  baseURL: 'https://www.markerhub.com/vueadmin-java',
  timeout: 5000
})
service.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('gettoken')
    config.headers.Authorization = token
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

// const request = (options) => {
//   if (options.method.toLowerCase() === 'get') {
//     options.params = options.data || {}
//   }
//   return service(options)
// }

export default service
