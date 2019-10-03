var https = require("https");
var fs=require("fs");
//var JSON=require("JSON");
var options ={
    hostname:
    "jsonplaceholder.typicode.com",
    method: "GET",
    port: 443,
    path:"/users"
};

 var request=https.request(options,function(res)
 {
     var wholeData = "";
     res.on("data",function(chunk)
     {
         wholeData=wholeData + chunk;
     });
     res.on("end",function(){

     //fs.writeFileSync("file.txt",wholeData);
     
        var json=JSON.parse(wholeData);
        console.log(typeof json);
        
        createFile(json);
        //console.log(json);
        function createFile(json)
        {
            for(var i=0;i<json.length;i++) 
            {
                var username=json[i]["username"];
                fs.writeFileSync(username+".txt",JSON.stringify(json[i]));
               
            }
        }
         
         //var json=JSON.parse(wholeData);
        // console.log(typeof json);
       // console.log(json);
        // console.log(wholeData);
     });
 });
 request.end();