'npm install express'
'npm install --global nodemon'

const express = require('express');
const app = express();
const port = 8081;

app.use(express.json());

// Create Cookie
app.get('/', function(req, res){
  var opts ={
    maxAge: 90000,
    sameSite: 'strict'
  };

  res.cookie('user_name', 'some_username', opts)
  res.send('Welcome to our website, please login')
})

// Sets cookies when routed to /login with their name
app.post('/login', function(req, res, next){
  res.cookie('name', { name: 'Bob'})
  res.status(200).send();
})

// If cookie is present with name key, display "Welcome {name}! when user routes to /hello"
app.get('/hello', function(req, res) {
  res.status(200).send(`Welcome ${req.cookies.name}`)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))