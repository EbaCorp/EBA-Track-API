var fs = require('fs')
const http = require('http')

fs.writeFile(
    "track.log", 
    "["
)

http.createServer((request, response) => {
    const { headers, method, url } = request
    let body = []


    request.on('error', (err) => {
        console.log(err)
    }).on('data', (chunk) => {
        body.push(chunk)
    }).on('end', () => {
        body = Buffer.concat(body).toString()
        fs.appendFile(
            "track.log", 
            "{"
                + '"x":'+ '"' + getQueryVariable("x", body) + '",'
                + '"y":'+ '"' + getQueryVariable("y", body) + '"'
                +
            "},"
        )
    })
    


}).listen(3000)

// parse request
function getQueryVariable(variable, query) {
    var query = query
    var vars = query.split('&')

    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split("=")
        if(decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1])
        }
    }
}