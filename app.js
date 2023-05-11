const url = require('url');
const fs = require('fs')


const route = {
    '/' : './resources/views/home/index.html',
    '/content/styles/site.css' : './content/styles/site.css'
    
}

function renderHtml(path, response) {
    fs.readFile(path,null, (err,data)=>{
        if(err) {
            response.writeHead(404);
            response.write('Page not found')
        } else if(path.indexOf('.css') != -1 ){
            response.writeHead(200, {'Content-type' : 'text/css'})
            response.write(data)
            response.end()
        } else {
            response.write(data) 
        }
        response.end()
    })
}

module.exports = {
    handleRequest: function(req,res) {
        res.writeHead(200, {'Content-type' : 'text/html'})
        const path = url.parse(req.url).pathname
        if(!route[path]) {
            res.writeHead(404);
            res.write('Page not found');
            res.end()
        } 
        renderHtml(route[path], res)
    }
}