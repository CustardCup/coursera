// Challenge at: https://www.freecodecamp.org/learn/javascript-v9/lab-cargo-manifest-validator/lab-cargo-manifest-validator

const normalizeUnits = (manifest) => {
  if (manifest.unit == "lb"){
    return { ...manifest, weight: manifest.weight*0.45, unit: "kg" }
  } else return { ...manifest}
};

function validateManifest(manifest){
  let newObject = { ...manifest};

  // container
  if ("containerId" in newObject) {
    if (newObject.containerId > 0 && !(newObject.containerId%1)) {
      delete newObject.containerId;
    } else {
      newObject.containerId = "Invalid";
    }; 
  } else {
    newObject = { ...newObject, containerId: "Missing"};
  };
  // endContainer

  // destination
  if ("destination" in newObject) {
    if (typeof newObject.destination === "string" && newObject.destination.trim()) {
      delete newObject.destination;
    } else {
      newObject.destination = "Invalid";
    }; 
  } else {
    newObject = { ...newObject, destination: "Missing"};
  };  
  // endDestination

  // weight
  if ("weight" in newObject) {
    if (newObject.weight>0) {
      delete newObject.weight;
    } else {
      newObject.weight = "Invalid";
    }; 
  } else {
    newObject = { ...newObject, weight: "Missing"};
  };  
  // endWeight

  // unit
  if ("unit" in newObject) {
    if (newObject.unit == "kg" || newObject.unit == "lb" ) {
      delete newObject.unit;
    } else {
      newObject.unit = "Invalid";
    }; 
  } else {
    newObject = { ...newObject, unit: "Missing"};
  };  
  // endUnit

   // hazmat
  if ("hazmat" in newObject) {
    if (typeof newObject.hazmat === "boolean" ) {
      delete newObject.hazmat;
    } else {
      newObject.hazmat = "Invalid";
    }; 
  } else {
    newObject = { ...newObject, hazmat: "Missing"};
  };  
  // endHazmat 

  return newObject
};

console.log(validateManifest({ containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false }))

function processManifest(manifest){
  if (Object.keys(validateManifest(manifest)).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    return console.log(validateManifest(manifest));
  };
};

