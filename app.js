const express = require('express')
const router = express.Router()
const dotenv = require('dotenv');
const app = express()
const mongoose = require('mongoose')
// const passport = require('passport')
// require("./config/passport")(passport)
var cors = require('cors')

const connectDB = require('./src/database/connection');

app.use(express.urlencoded({extended : false}))

const postRoutes = require('./src/routes/postRoutes')
const profileRoutes = require('./src/routes/profilRoutes')
const indexRoutes = require('./src/routes/indexRoute')

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080

connectDB();

app.use(cors());
app.options('*', cors())

app.use('/posts', postRoutes)
app.use('/profiles', profileRoutes)
app.use('/', indexRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});

// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized : true
// }))

// app.use(passport.initialize())
// app.use(passport.session())

// app.use(flash())
// app.use((req,res,next)=>{
//     res.locals.success_msg = req.flash('success_msg')
//     res.locals.error_msg= req.flash('error_msg')
//     res.locals.error = req.flash('error')
//     next()
// })

// app.use('/',require('./routes/index'))
// app.use('/users',require('./routes/users'))

// app.listen(3000);