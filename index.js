const http = require('http');
const fs = require('fs');
const url = require('url')
const path = require('path')
const cats = require('./data/cats.json')



const server = http.createServer((req, res) => {

    const pathname = url.parse(req.url).pathname
    console.log(pathname);

res.write(`${pathname}`)
res.end()

});
server.listen(5000, () => console.log('Server is listening on port 5000'))