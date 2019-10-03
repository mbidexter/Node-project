var dec = 13;
 var bin=0;
  var pow =1;

while(dec>0)
{   
   var f = dec%2;
    bin= bin + f*pow;
    pow=pow*10;
    dec= Math.floor(dec/2); 
}
    console.log(bin);
