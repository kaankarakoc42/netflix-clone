import axius from 'axios'

const instance = axius.create({
    baseURL:'https://api.themoviedb.org/3'
})

export default instance