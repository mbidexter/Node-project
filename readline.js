var readline =require("readline");
var reader= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "mycli>"

});

reader.prompt();
reader.on("line",function(data){
    console.log("Did you said " +  data);
    reader.prompt();
});

reader.on("close",function(){
    console.log("Thankyou for using your cli");
   reader.prompt();
});
