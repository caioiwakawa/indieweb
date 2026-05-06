const express = require('express')
const app = express()
const fs = require('fs').promises
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static('public'))

async function getLatestPost() {
    const data = await fs.readFile(path.join(__dirname, 'posts', '/posts.json'))
    const posts = JSON.parse(data)
    return posts.at(-1)
}

app.get('/', async (req, res) => {
    try {
        latest_post = await getLatestPost()
        res.render('index', {latest_post})
    } catch (err) {
        console.log("Error fetching blog post:", err)
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));