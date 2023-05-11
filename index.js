const http = require('http');
const fs = require('fs');
const url = require('url')
const path = require('path')
const cats = require('./data/cats.json');
const app = require('./app')
const { homeController } = require('./controllers/home');



const server = http.createServer(app.handleRequest) 
    
   
  
        

server.listen(5000, () => console.log('Server is listening on port 5000'))