import axios from 'axios'
import { apiUrl } from '../../constants/url'

const loginApi = (account) => {
  const url = `${apiUrl}/v1/login`
  return axios.post(url, {...account})
}

const logoutApi = () => {
  const url = `${apiUrl}/v1/logout`
  return axios.post(url)
}

export {
  loginApi,
  logoutApi
}