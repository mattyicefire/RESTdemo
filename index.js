const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        username: 'Todd',
        comment: 'lol that is funny'
    },
    {
        username: 'Charles',
        comment: 'this is cool'
    },
    {
        username: 'Tyler',
        comment: 'you are hurting my feelings'
    },
    {
        username: 'Matt',
        comment: 'lets pardy'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment })
    res.redirect('/comments');
})

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response')
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`ok here are your ${qty} ${meat}`)
})

app.listen(3000, () => {
    console.log("on port 3000")
})