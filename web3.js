const http = require ('http')
//import module file system(fs) de doc du lieu tu file html
const fs = require('fs')
const { error } = require('console')
const port = 5000
const server = http.createServer((req,res) =>{
    if(req.url==='/'){
        fs.readFile('index.html', (err, data) =>{
            if(err){
                console.log(err)
            }else{
                res.write(data)
                res.end()
            }
        })
    }else if (req.url==='/hanoi'){
        fs.readFile('hanoi.html' , (err, data) =>{
            if(err){
                console.log(err)
            }else{
                res.write(data)
                res.end()
            }
        })
    }else if (req.url === '/danang'){
        fs.readFile('danang.html', (err, data) =>{
            if(err){
                console.log(err)
            }else{
                res.write(data)
                res.end()
            }
        }) 
    }else if (req.url === '/cantho'){
        fs.readFile('cantho.html', (err, data) =>{
            if(err){
                console.log(err)
            }else{
                res.write(data)
                res.end()
            }
        })
    }else if (req.url === '/hcm'){
        fs.readFile('hcm.html', (err, data) =>{
            if(err){
                console.log(err)
            }else{
                res.write(data)
                res.end()
            }
        })
    }else {
        fs.readFile('notfound.html', (err, data) =>{
            if(err){
                console.log(err)
            }else{
                res.write(data)
                res.end()
            }
        })
    }
})
server.listen(port, ()=>{
    console.log ("server is running at http://localhost:" + port)
})