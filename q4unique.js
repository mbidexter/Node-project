//unique array

var print = console.log;

var arr = [1,2,3,4];
var arr2 = [1,3,2,4,6,7];
var arr3 =[""];

for(var i=0;i<arr.length;i++)
{  
    for(var j=0;j<arr2.length;j++) 
    {
        if(arr[i]==arr2[j])
      {
        //arr3.push(arr[i]);
        arr2[j]= -100;
        break;
      }
    }
    arr3.push(arr[i]);
}
for(var i=0;i<arr2.length;i++)
{
    if(arr2[i]!=-100)
    {
        arr3.push(arr2[i]);
    }
}

for(var k=0;k<arr3.length;k++)
{
    print(arr3[k]);
}