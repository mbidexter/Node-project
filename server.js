var http= require("http");
var fs= require("fs");
var url= require("url");
var replace=require("./replace");

var file1=fs.readFileSync("product.html");
var file2=fs.readFileSync("overview.html");
var file3=fs.readFileSync("background.html");
var data=fs.readFileSync("data.json");
var template=fs.readFileSync("template.html") ;  //data read here is in binary form ,buffer format
//var file3=fs.readFileSync("Delphine.txt");
var output= data + "";

//var json= JSON.parse(data);// to convert to object
file1=file1 + "";
file2=file2 + "";
file3=file3 + "";
template=template + "";
 output=JSON.parse(output);
// console.log()
//file1=file1.replace(/Fresh Avocados/g,"Organic Avocados");
//file1=file1.replace(/productName/g,output[2].productName);
//file1=file1.replace(/product__description/g,output[3].description);

var server=http.createServer(function(req,res){
   // console.log(req.url);
   
   if(req.url=="/" || req.url=="/overview")
    {   var cards="";

         for(var i=0;i<output.length;i++)
        {
          cards+=replace(template,output[i]);
        }
        file3=file3.replace(/{Cards}/g,cards);

        res.write(file3);}
    else if(req.url=="/api")
    res.write(output);
    else if(req.url=="/product")
    res.write(file1);
     else{
     var myfile=file1;
         console.log("..............");
         console.log(req.url);
         var parsedUrl= url.parse(req.url,true).query.id;
         console.log(parsedUrl);
         myfile=myfile.replace(/productName/g,output[parsedUrl].productName);
         myfile=myfile.replace(/product__description/g,output[parsedUrl].description);
         myfile=myfile.replace(/country/g,output[parsedUrl].from);
         myfile=myfile.replace(/nutrients/g,output[parsedUrl].nutrients);
         myfile=myfile.replace(/image/g,output[parsedUrl].image);
         res.write(myfile);

         
        // console.log("hii");
        //res.write(req.url);
     }
     //res.write("<h1>hiiiii page not found!</h1>");
    res.end();

});
var port= process.env.PORT||3000;
server.listen(port,function()
{
    console.log( "Server is listening at port 3002");
});
