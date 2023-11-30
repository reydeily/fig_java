import axios from 'axios'

const api = axios.create({
  baseURL: 'https://yoo-g1td.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api