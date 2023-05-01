import axios, { AxiosInstance } from 'axios'
import { Axios } from 'constants/types/axios.type'

const https: AxiosInstance = axios.create({
  baseURL: Axios.BASE_URL,
  headers: {
    Authorization: `bearer ${Axios.ACCESS_TOKEN}`
  }
})

export default https
