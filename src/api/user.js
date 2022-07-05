import request from '../utiles/request'
/*
 * 登录接口
 * @param {*} data
 * @returns
 */
const Login = (data) => {
  return request({ url: '/login', method: 'POST', data })
}
const getcaptcha = (data) => {
  return request({ url: '/captcha', method: 'GET', data })
}
export default { Login, getcaptcha }
