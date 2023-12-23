const express = require('express');
const routes = require('./mod-routes/routes');
const PORT = process.env.PORT || 3000;
const app = express();

app.use('/',  routes)
app.get('*', (req, res) => {res.send('Rota padrao')}); // rotas genericas

app.listen(PORT, () => console.log('Server is running...'))