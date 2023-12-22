const express = require('express')
const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => res.send('page: main - testando o express...') )

app.get('/pag2', (req, res) => {
    res.json({name: 'Bruno'})
})

app.listen(PORT || 3000, () => console.log('Server is running...'))