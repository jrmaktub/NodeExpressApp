let express = require('express')

const { request, response} = require('express')

require('dotenv').config()

let app = express();

//print environment variable 
console.log(process.env.VARIABLE_ONE)

 let person = {
     'Name' : 'Bob',
     'Age' : 20
 }


app.get('/person', (request, response)=>{
    response.json(person)
})

app.listen(3000)

app.use('/pics', express.static(__dirname + '/images'))

//root Middleware: for any request, it  will log these details  and call next function 
app.get('/hello', (request, response, next) =>{
    console.log(request.method)
    console.log(request.ip)
    next()
    // chained Middleware runs the second function
}, (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})


// when there is a request to /pics, it will replace that slash with the other path


let message = {"message": 'Hello json'}

app.get('/json', (request, response)=>{
    response.json(message)
})