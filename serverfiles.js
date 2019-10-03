var http= require("http");
var fs= require("fs");

var file1=fs.readFileSync("Bret.txt");
var file2=fs.readFileSync("Antonette.txt");
var file3=fs.readFileSync("Delphine.txt");



var server=http.createServer(function(req,res){
   // console.log(req.url);
   if(req.url=="/Bret")
    res.write(file1);
    else if(req.url=="/Antonette")
    res.write(file2);
    else if(req.url=="/Delphine")
    res.write(file3);
     else{
         res.write("<h1>404 page not found!</h1>");
     }
    res.end();

});

server.listen(3002,function()
{
    console.log( "Server is listening at port 3002");
});
