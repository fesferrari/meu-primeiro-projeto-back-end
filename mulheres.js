const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Fernanda Ferrari Silva',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQGcGJuaNApUqg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1665688395183?e=1733356800&v=beta&t=s-yN5MRIEbswa0JZdzqL_nR48NoyIKLmHZ0NbgmDtrg',
        minibio: 'Leitora e Psicóloga'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQGcGJuaNApUqg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1665688395183?e=1733356800&v=beta&t=s-yN5MRIEbswa0JZdzqL_nR48NoyIKLmHZ0NbgmDtrg',
        minibio: 'Fundadora da PrograMaria'
    },
    {
        nome: 'Nina da Hora',
        imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQGcGJuaNApUqg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1665688395183?e=1733356800&v=beta&t=s-yN5MRIEbswa0JZdzqL_nR48NoyIKLmHZ0NbgmDtrg',
        miniobio: 'Hacker antirracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)