const http = require('http')
const port = 3000
const express = require('express');
const app = express();
const phe = require('phe');

//const router = express.Router()

//Static Files
app.use(express.static('public'))
//app.static.mime.define({'text/javascript': ['phe']})
app.use(express.static('phe'))

//Render HTML
app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'index.html'))
})

// router.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'))
// })

// app.use('/', router)

app.listen(port, () => {
    console.log('Server running on port ' + port)
})




