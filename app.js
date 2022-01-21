let express = require('express')

let app = express();

// let person = {
//     'Name' : 'Bob',
//     'Age' : 20
// }


app.get('/person', (request, response)=>{
    response.json(person)
})

app.listen(3000)



app.get('/hello', (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})

// when there is a request to /pics, it will replace that slash with the other path
app.use('/pics', express.static(__dirname + '/images'))

let message = {"message": 'Hello json'}

app.get('/json', (request, response)=>{
    response.json(message)
})