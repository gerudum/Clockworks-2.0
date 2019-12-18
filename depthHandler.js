//We need the datehandler to offset depth dates.
const DateHandler = require('./date.js');

function ShiftArrayToRight(arr, places) {
    for (var i = 0; i < places; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}

function CycleLevels(depth){
  //Check the direction to swap in
  switch(depth.direction){
    //Move the array in that direction, level on the outside will wrap around
    case 'right':
       depth.levels = ShiftArrayToRight(depth.levels,1);
    break;
    case 'left':
       depth.levels = ShiftArrayToRight(depth.levels, depth.levels.length - 1);
    break;
  }
  
  //Getting the next time we should offset by
  depth.rotationIndex += 1;
  if(depth.rotationIndex >= depth.rotationTime.length;) { depth.rotationIndex = 0; }
    
  depth.nextRotation = DateHandler.OffsetDate(depth.nextRotation,depth.rotationTime[depth.rotationIndex]); 
}

function CycleMarker(depth){
  //Check which direction to swap in
  switch(depth.direction){
    //Move the array in that direction, level on the outside will wrap around
    case 'right':
       depth.marker = ShiftArrayToRight(depth.marker,1);
    break;
    case 'left':
       depth.marker = ShiftArrayToRight(depth.marker, depth.levels.length - 1);
    break;
  }
  
  //Get the next time we should offset by 
  depth.markerRotationIndex += 1;
  if(depth.markerRotationIndex >= depth.markerRotationTime.length) { depth.markerRotationIndex = 0; }
    
  depth.nextMarkerRotation = DateHandler.OffsetDate(depth.nexxMarkerRotation,depth.markerRotationTime[depth.markerRotationIndex]);
}


module.exports.CycleLevels = CycleLevels;
module.exports.CycleMarker = CycleMarker;
