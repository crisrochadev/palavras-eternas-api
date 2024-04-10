import 'dotenv/config'
import express from 'express';
import version from './models/Version.js';
import {books,book} from './models/Books.js';
import { verses } from './models/Verses.js';

const port = '8181';

const app = express();
app.use(express.json())


// Middleware para autenticação básica
import  basicAuth from 'express-basic-auth';

app.use(basicAuth({
    users: { [process.env.API_USER]: process.env.API_PASS },
    unauthorizedResponse: getUnauthorizedResponse
}));

function getUnauthorizedResponse(req) {
    return req.auth ? 'Sem autorização, ou credenciais incorretas!'  : 'Você precisa de autorização para acessar essa api';
}


//Rotas

//Versão
app.get('/versoes', async (req,res) => {
  const result = await version();
    res.status(result.status).json(result)
})

//Livros
app.get('/livros', async (req,res) => {
  const result = await books();
    res.status(result.status).json(result)
})
app.get('/livros/:liv_abreviado', async (req,res) => {
  const result = await book(req);
    res.status(result.status).json(result)
})

//Verses
app.get('/versiculos/:ver_vrs_id', async (req,res) => {
  const result = await verses(req);
    res.status(result.status).json(result)
})
app.get('/versiculos/:ver_vrs_id/:ver_liv_id', async (req,res) => {
  const result = await verses(req);
    res.status(result.status).json(result)
})
app.get('/versiculos/:ver_vrs_id/:ver_liv_id/:ver_capitulo', async (req,res) => {
  const result = await verses(req);
    res.status(result.status).json(result)
})
app.get('/versiculos/:ver_vrs_id/:ver_liv_id/:ver_capitulo/:ver_id', async (req,res) => {
  const result = await verses(req);
    res.status(result.status).json(result)
})



//listen
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})