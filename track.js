const fs = require('fs')
let jsonStr = ""

fs.readFile("track.log", "utf8", function(err, data) {
    jsonStr = data.slice(0, -1)
    jsonStr += "]"
    jsonObj = JSON.parse(jsonStr)

    let resultArr = []

    for(j of jsonObj) {
        let tmpArr = []

        tmpArr.push(new Number(j.x))
        tmpArr.push(new Number(j.y))
        tmpArr.push(1)

        resultArr.push(tmpArr)
    }

    fs.writeFile(
        'data.js', "var data = "+JSON.stringify(resultArr)
    );
    
});

