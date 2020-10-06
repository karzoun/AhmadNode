const express = require('express')
const app = express()
app.listen(3000)
app.get('/', (req, res) => {
    // res.send('<p>home page</p>')
    res.sendFile('/vie/index.html', { root: __dirname })
})
app.get('/about', (req, res) => {
    // res.send('<p>about page</p>')
    res.sendFile('/vie/about.html', { root: __dirname })
})


app.use((req, res) => {
    res.sendFile.status(404)('./vie/404.html', { root: __dirname })

})