var http= require("http");
var fs= require("fs");
var file=fs.readFileSync("Bret.txt");

var server=http.createServer(function(req,res){
    console.log(req.url);
   // res.write("Rendered text from node server");
    res.write(file);
   // res.write("Another text from node server");
    res.end();

});

server.listen(3001,function()
{
    console.log( "Server is listening at port 3001");
});