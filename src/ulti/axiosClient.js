import axios from "axios";

const Token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmNiMmJkMGRhNmEwNDNhODU0MmJmNzJkZmE1ZmM1MyIsInN1YiI6IjYxZDY3YjkzMWI3MjJjNWRiYjQxNGMzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v3GoTBhbdIuN-0NnRQRus0Ee4zYJfqAvRoO6xAAlfOA'

const axiosClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer ${Token}`
    }
})

export default axiosClient