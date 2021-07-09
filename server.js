// import modules

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import * as todoDb from './data/todo-db.js'
import * as foodDb from './data/food-db.js'

// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')
app.set(
  'views',
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)


// Mount Middleware (app.use)
// app.use((req, res) => {
//     console.log('WE GOT A NEW REQUEST')
//     res.send('you know its a party when it goes through the middleware')
// })


// Mount routes
app.get('/', function(req, res) {
  res.redirect('/home')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/todos', function(req, res){
  todoDb.find({}, function(error, todos) {
    res.render('todos/index', {
      todos: todos,
      error: error
    })
  })
})

app.get('/meals', function(req, res) {
  foodDb.meals({}, function(error, foodInfo) {
    res.render('meals/index', {
      foodInfo: foodInfo,
      error: error
    })
  })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})