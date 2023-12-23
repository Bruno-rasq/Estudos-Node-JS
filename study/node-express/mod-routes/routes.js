const express = require('express');
const routes = express.Router();

let cursors = [

    {'curso': 'node', 'info': 'curso de node'},
    {'curso': 'react', 'info': 'curso de react'},
    {'curso': 'typescript', 'info': 'curso de typescript'},
    {'curso': 'scss', 'info': 'curso de scss'},
    {'curso': 'arduino', 'info': 'curso de arduino'}
]

routes.get('/', (req, res) => { res.json({ola: 'bem-vindo!'})}); // rota base

routes.get('/:cursoID', (req, res) => { 

    const curso = req.params.cursoID
    const curso_info = cursors.find( i => i.curso == curso )

    if(!curso_info){
        res.status(404).json({
            erro: 'course not found',
            cursoPesquisado: curso
        })

    } else {
        res.status(200).json(curso_info)
    }
}); 

module.exports = routes;