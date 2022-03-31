const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        id: 1,
        username: 'Todd',
        comment: 'lol that is funny'
    },
    {
        id: 2,
        username: 'Charles',
        comment: 'this is cool'
    },
    {
        id: 3,
        username: 'Tyler',
        comment: 'you are hurting my feelings'
    },
    {
        id: 4,
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

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id));
    res.render('comments/show', { comment });
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