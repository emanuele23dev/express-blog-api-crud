const express = require('express')
const app = express()
app.use(express.json())


const videogamesRoutes = require('./routers/videogames.js')

const host = 'http://127.0.0.1'
const port = 3000

app.listen(port, () => {
    console.log(`App listen on ${host}:${port}`);
})

app.get('/', (req,res) => {
    res.send('VideoGames Express')
})
    
app.use('/videogames', videogamesRoutes)