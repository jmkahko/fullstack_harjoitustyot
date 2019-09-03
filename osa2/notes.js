import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const poisto = (id) => {
    return axios.delele(baseUrl/`${id}`)
}

export default {
    getAll: getAll, 
    create: create,
    delete: poisto
  }