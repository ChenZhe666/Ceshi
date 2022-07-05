import request from '../utiles/request'
/*
 * 登录接口
 * @param {*} data
 * @returns
 */
// const Login = (data) => {
//   return request({
//     url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
//     method: 'POST',
//     data
//   })
// }
const Login = (data) => {
  console.log(data, 'data')
  return request.post(
    `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`
  )
}
const getcaptcha = (data) => {
  return request({ url: '/captcha', method: 'GET', data })
}
const getleftmenu = () => {
  return request({ url: '/sys/menu/nav', method: 'GET' })
}
export default { Login, getcaptcha, getleftmenu }
