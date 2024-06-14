import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import axios from 'axios'
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
const API_KEY = process.env.API_KEY
app.get('/search', async (req, res) => {
    const client = axios.create({
        baseURL: 'https://api.thecatapi.com/v1/images/',
        headers: {
            'x-api-key': API_KEY
        }
    })

    const resposta = await client.get('/search', {
        params: {
            limit: 5
        }
    })

    res.json(resposta.data)
})
const porta: number = 3000 //Alterar para uma porta livre, se o servidor não subir
app.listen(porta, () => {
    console.log(`Executando na porta ${porta}`)
})