const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const userRoute = require('./routes/user')
const path = require('path')

const app = express()
dotenv.config()

app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log('Connected to MongoDB'))
.catch((err) => {
    console.log(err)
})


app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/product', productRoute)


app.listen(5000, () => {
    console.log('Server running on port 5000')
})













