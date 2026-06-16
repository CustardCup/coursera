// You are creating a function that aids in the maintenance of a musical album collection. The collection is organized as an object that contains multiple albums which are also objects. 
// Each album is represented in the collection with a unique id as the property name. Within each album object, there are various properties describing information about the album. 
// Not all albums have complete information.

// The updateRecords function takes 4 arguments represented by the following function parameters:

//     records - an object containing several individual albums
//     id - a number representing a specific album in the records object
//     prop - a string representing the name of the album’s property to update
//     value - a string containing the information used to update the album’s property


const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value)
{
  if (value=="") {
    delete records[id][prop];
  } else if (prop != "tracks") {
    records[id][prop] = value;
  } else if (!("tracks" in records[id])) {
    records[id]["tracks"] = [value];
  } else {
    records[id]["tracks"].push(value);
  };
  return records;
};

console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")) // OUTPUT BELOW
// { '1245': { artist: 'Robert Palmer', tracks: [] },
//   '2468': 
//    { albumTitle: '1999',
//      artist: 'Prince',
//      tracks: [ '1999', 'Little Red Corvette' ] },
//   '2548': 
//    { albumTitle: 'Slippery When Wet',
//      artist: 'Bon Jovi',
//      tracks: [ 'Let It Rock', 'You Give Love a Bad Name' ] },
//   '5439': { albumTitle: 'ABBA Gold', tracks: [ 'Take a Chance on Me' ] } }
