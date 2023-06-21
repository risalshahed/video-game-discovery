import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '78fd302d35e4444ea7885a5e030bc455'
    }
})