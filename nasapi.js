var https = require("https");
var fs = require("fs");
var writetoit = fs.createWriteStream("img.jpeg");

var options ={
    hostname:"api.nasa.gov",
    method: "GET",
    port: 443,
    path:"/planetary/apod?api_key=DEMO_KEY"
};

var request=https.request(options,function(res)
{
    var wholeData = "";
     res.on("data",function(packet)
     {
         wholeData=wholeData + packet;
     });
     
     res.on("end",function(){
        
           var json=JSON.parse(wholeData);
            var url=json["url"];
            console.log(wholeData);
            
           var reimage= https.get(url,function(res){
               res.pipe(writetoit);
              // var img ="";
              // res.on("data",function(chunk)
             //  {
              //     img=img + chunk;
               
          // });
         //  res.on("end",function(){
         //      fs.writeFileSync("img.jpeg",img);
         //  });
        });
        reimage.end();
    });
});

    request.end();