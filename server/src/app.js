const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var path = require('path')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var o = require(path.join(__dirname, '/../data/sample.json'))


app.use(express.static(path.join(__dirname, '/../../client/dist/')))
   .use(cors());

app.get('/posts', (req, res) => {
  res.send(
    [{
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})

app.get('/test', (req, res) => {
  dummy = res.json(o);
})

app.listen(process.env.PORT || 8081)