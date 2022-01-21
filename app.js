let express = require('express')

let app = express();

app.listen(3000)

console.log(__dirname)

app.get('/hello', (request, response)=> {
    
    response.sendFile(__dirname + '/index.html')
})