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
  
  depth.nextRotation = DateHandler.OffsetDate(depth.nextRotation,depth.rotationTime); 
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
  
  depth.nextMarkerRotation = DateHandler.OffsetDate(depth.nexxMarkerRotation,depth.markerRotationTime);
}


module.exports.CycleLevels = CycleLevels;
module.exports.CycleMarker = CycleMarker;
