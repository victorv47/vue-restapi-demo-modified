import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.swapi.tech/api/',
})

const useApi = () => {
  return { instance }
}

export default useApi
