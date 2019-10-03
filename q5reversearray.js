//reverse array
var print = console.log;

var arr = [1,2,3,4];

var arr2 = [];

for(var i=arr.length-1;i>=0;i--)
{
    arr2.push(arr[i]);
}
for(var i=0;i<arr2.length;i++)
{
    print(arr2[i]);
}