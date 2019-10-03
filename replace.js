module.exports=function(template,json){

let output=template.replace(/%PRODUCTNAME%/g,json["productName"]);
output=output.replace(/%IMAGE%/g,json["image"]);
output=output.replace(/%QUANTITY%/g,json["quantity"]);
output=output.replace(/%PRICE%/g,json["price"]);
output=output.replace(/%DESCRIPTION%/g,json["description"]);
output=output.replace(/%FROM%/g,json["from"]);
output=output.replace(/%NUTRIENT%/g,json["nutrients"]);
output=output.replace(/%ID%/g,json["id"]);
 if(json["organic"]===false)
 {
    output=output.replace(/(%NOT_ORGANIC%)/g,json["not organic"]);
 }
return output;
}