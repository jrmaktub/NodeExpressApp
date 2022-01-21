let express = require('express')

const { request, response} = require('express')

require('dotenv').config()

let bodyParser = require('body-parser')

let app = express();


//print environment variable 
console.log(process.env.VARIABLE_ONE)

//  let person = {
//      'Name' : 'Bob',
//      'Age' : 20
//  }

let people = {
    'alice': {name: 'Alice', age: 22},
    'bob' : {name: "Bob", age: 27},
    'charlie' : {name: 'charlie', age: 25}
}

app.post('/search', bodyParser.urlencoded({ extended: false }), (request,response,next)=>{
    let name = request.body.name
    if (people[name]){
        response.json(people[name])
    }else{
        response.json('Not Found')
    }
})

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/profile', (request,response)=>{

    let name = request.query.name
    if (people[name]){
        response.json(people[name])
    }else{
        response.json('Not Found')
    }
})

//extract the name from the url
app.get('/profile/:name', (request, response) =>{
    let name = request.params.name
    //if there is an entry in people with that key
    if (people[name]){
        response.json(people[name])
    }else{
        response.json('Not Found')
    }
})

app.get('/person', (request, response)=>{
    response.json(person)
})

app.listen(3000)

app.use('/pics', express.static(__dirname + '/images'))

//root Middleware: for any request, it  will log these details  and call next function 
//when the user gets to path, it creates a time field in the request
//sets that to current date in string format
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