var print = console.log;

//1.) If prop isn't "tracks" and value isn't empty (""), update or set the value for that record album's property.
//2.) If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array before adding the new value to the album's corresponding property.
//3.) If prop is "tracks" and value isn't empty (""), push the value onto the end of the album's existing tracks array.
//4.) If value is empty (""), delete the given prop property from the album.

var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999",
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold",
artist:"ABBA"
    }
};

function updateRecords(id,prop,value)
{
  if(prop!="tracks" && value!="")
  {
    collection[id][prop]=value;   
  }
  else if(prop=="tracks" && collection[id][prop]==undefined)
  {
    collection[id].tracks=[value];
  }
  else if(prop=="tracks" && collection[id][prop]!=undefined)
  {
   // console.log(collection[id][prop]);
   collection[id][prop].push(value);
  }
  
  else{
  delete collection[id][prop];
  }
}

updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me");
 updateRecords(2548, "artist", "");

 console.log(collection);