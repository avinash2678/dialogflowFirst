var http = require("http");
var applicationResouces = require("./applicationResouces");

http.createServer(function (req, resp) {
    switch (req.method) {
        
        case "POST":
             resp.writeHead(200, "operation  successfull", { "Content-Type": "application/json" });
             resp.write(JSON.stringify({ fulfillmentText :"Hello i am good" }));
             resp.end();
           
            break;
        default:
          
            break;
    }
}).listen( applicationResouces.port);