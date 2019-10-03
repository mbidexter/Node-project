var print=console.log
//function downloadFile(url, downloaded) {
    // We are downloading the file here
    //var path = "C:\\Downloads\\";
    // let's assume it takes 3 seconds to download
    // accepts url of image and callback which is called when downloading is done
  //} 
  var path = "C:\\Downloads\\";
  function downloadFile(url,cb) {
    console.log( "Downloading from " + url) ;
    var img=url.split(" ").pop();

    var dfile= path + img;

    setTimeout(function(){cb(dfile);}, 3000)
  }

    function downloaded(dfile)
    {
        
        console.log("Files saved to" + dfile  ); 
    }

    
    downloadFile("http://google.com/logo.png",downloaded)

 


  //function compressFile(filePath, compressed) {
    // let's assume it takes 2 seconds to compress
    //accepts  image filepath and callback which is called when compressesion is done
  //}

  function compressFile(filePath, compressed) {
    
    function compressed()
    {
    console.log( "We are compressing: "+ path) ;
        console.log("File compressed to:" + path);  
      
  }

  setTimeout(compressed, 3000)
} 

 
  compressFile(path,"");


  //function uploadFile(diskPath, uploaded) {
 //   var uploadUrl = "http://pep/uploads";
    // We will upload this file, it takes 3 seconds,
    // let's assume it takes 3 seconds to upload
    //accepts  image filepath and callback which is called when uploading is done
  //}

  function uploadFile(diskPath, uploaded) {
    var uploadUrl = "http://pep/uploads";
   
    function uploaded()
    {
        console.log("Uploading to: " +  uploadUrl);
        console.log(" File successfully uploaded to: " + uploadUrl);
    }
    setTimeout(uploaded, 3000);


  }

 // function uploadFile("-resized.","");

