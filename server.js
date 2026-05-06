const express = require('express')
const app = express()
const postStore = require('./utils/postStore')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', async (req, res) => {
    try {
        latest_post = await postStore.getLatestPost()
        res.render('index', { latest_post: latest_post})
    } catch (err) {
        console.log("Error fetching blog post:", err)
    }
})

app.get('/blog', async (req, res) => {
    try {
        posts = await postStore.getPosts()
        res.render('blog', { posts: posts })
    } catch (err) {
        console.log("Error fetching posts:", err)
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));