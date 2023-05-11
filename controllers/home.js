const fs = require('fs');



const homeController = (req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'})
   fs.readFile('./resources/views/home/index.html', null, (err,data) => {
        if(err) {
            res.writeHead(404)
            res.write('File not found')
          
        } else {
            res.write(data)
        }
        res.end()
    })
}

module.exports = {
    homeController
}