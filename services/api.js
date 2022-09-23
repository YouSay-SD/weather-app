import axios from 'axios'
import { apiUrl } from '../utils/constants.js'

const API = axios.create({
  baseURL: apiUrl,
})
const APIToken = axios.create({
  baseURL: apiUrl,
})

export { API, APIToken }
