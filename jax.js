var ajax = require("./lib/filedownload");
//***************************************
var files = ["file1", "file2", "file3"];
var tracker={};

function getFile(file) {
  ajax.fakeAjax(file, function(data) {
// what do we do here?
console.log("Incoming file "+file+" "+data);
arrangeInorder(file,data);

  });
}
 function arrangeInorder(file, data)
 {
     tracker[file]=data;

     for(var i=0;i<files.length;i++)
     {
         if(tracker[files[i]])
         {
             if(tracker[files[i]]!=true)
             {
                 console.log(files[i]+ " : " + tracker[files[i]]);
                 tracker[files[i]]=true;
             }
         }
         else{
             return;
         }
     }
 }
// request all files at once in "parallel"
//print as soon as you receive them
// print them in seqential order
getFile("file1");
getFile("file2");
getFile("file3");
//output
// Requesting: file1
// Requesting: file2
// Requesting: file3
// The first  file's data
// The second file's data
// The third file's data 
// Complete
//inversion of control
var total =100;
var charges =20;
function creditcard()
{
    total=total-charges;
    console.log(total);
}

ajax.trackCheckout(charges,creditcard);