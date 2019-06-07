const fs = require('fs')
const path = require('path')

function handler (fghh) {
    if (err) {
        console.log('El archivo no existe')
    } else {
        console.log('Existe')
    }
}

const filePath = path.resolve(__dirname, 'static/index.html')
fs.access(filePath, fs.constants.F_Ok, handler)





const filePath = path.resolve(__dirname, 'static/index.html')
fs.access(filePath, fs.constants.F_Ok) handlerExiten
locahost:9000
Request.url '' -> indexed.html

locahost:9000
Request.url '/' -> indexed.html

locahost:9000/about
requestAnimationFrame.url '/about' -> about.html
