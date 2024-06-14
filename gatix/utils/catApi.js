import axios from "axios";

export default axios.create({
    //Endereço do servidor
    baseURL: 'http://localhost:3000'
})