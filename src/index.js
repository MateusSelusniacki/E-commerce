const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const routes = require('./Routes')
const app = express()

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, console.log('Connected to database'))
.catch(err => console.log(err))

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3000, () => console.log("Server running"))
//35