import express from 'express'

const app = express()

app.post('/login', (req, res) => {

    const {email, password} = req.body;
    //cadastrar usuário

})

app.put('/login', (req, res) => {

    const {idUser, name, email, password} = req.body

    if(!idUser) return res.status(401).send({status: 'error', message: 'id usuário null'})

})

app.delete('/login', (req, res) => {
    const {idUser, email} = req.body

    if(!idUser) return res.status(401).send({status: 'error', message: 'id usuário null'})

})

// ---- Register

app.post('/register', (req, res) => {

    const {name, email, password} = req.body;
})

export default app