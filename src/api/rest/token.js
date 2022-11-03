import axios from 'axios'

export const set = (token, setTokenToLocalStorage) => {
  axios.defaults.headers.Authorization = `token ${token}`

  if (setTokenToLocalStorage) {
    localStorage.setItem('token', token)
  }
}
