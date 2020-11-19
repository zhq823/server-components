const server = require("express")()
const Vue = require("vue")
const renderer = require('vue-server-renderer').createRenderer()

server.get("*", function(request, response) {
    const app = new Vue({
        template: `<div>hello world</div>`
    })
    renderer.renderToString(app, function(error, html) {
        if(error) {
            request.statusCode(500).end("Internal Server Error")
            return false
        }
        response.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head><title>Hello</title></head>
            <body>${html}</body>
            </html>
        `)
    })
})

const port = process.env.PORT || 5000
server.listen(5000, function() {
    console.log(`server started at localhost:${port}`)
})