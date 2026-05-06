const fs = require('fs').promises;
const path = require('path');
const filePath = path.join(__dirname, '../posts/posts.json')

module.exports = {
    getPosts: async () => {

    },
    getLatestPost: async () => {
        const data = await fs.readFile(filePath)
        const posts = JSON.parse(data)
        return posts.at(-1)
    }
}