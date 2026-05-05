const express = require('express')
const app = express()
const fs = require('fs').promises;

app.set('view engine', 'ejs')
app.use(express.static('public'))

async function getLatestPost() {
    const data = fs.readFile('posts.json')
    const posts = JSON.parse(data)
    const latest_post = posts.find(p => p.id)
}

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000)