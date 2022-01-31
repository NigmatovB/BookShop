const express = require('express')
const cors = require('cors')
const { join } = require('path')
const os = require('os')


const app = express()
const PORT = process.env.PORT || 4004 
// const host = os.networkInterfaces().en0[1].address || 'localhost'

const db = require('./helper/data')
const user = require('./routers/user')
const book = require('./routers/book')
const author = require('./routers/author')
db()

app.use( express.json() )
app.use( cors() )
app.use( '/images', express.static( join( process.cwd(), 'src', 'images' ) ) )

app.use( '/user', user )
app.use( '/book', book )
app.use( '/author', author )

// app.listen( PORT, ( ) => console.log( 'http://' + host + ':' + PORT ))
app.listen( PORT, ( ) => console.log( 'http://' + 'localhost' + ':' + PORT ))
