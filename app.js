let express = require('express')

let app = express();

app.listen(3000)

// when there is a request to /pics, it will replace that slash with the other path
app.use('/pics', express.static(__dirname + '/images'))

app.get('/hello', (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})