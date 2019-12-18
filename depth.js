
class Depth {
  constructor(name,direction,initLevelDate,initMarkerDate,levels,marker,rotationTime,markerRotationTime,nextRotation,nextMarkerRotation){
      this.name = name; //Name of the depth
      this.direction = direction; //Direction the levels will move
    
      this.initLevelDate = initLevelDate; //The date is was that position
      this.initMarkerDate = initMarkerDate; //The date the marker was at that position
    
      this.levels = levels; //The current levels
      this.marker = marker; //The current marker
    
      this.rotationTime = rotationTime; //How long it takes to rotate levels 
      this.markerRotationTime = markerRotationTime; //How long it takes to rotate marker
    
      this.nextRotation = nextRotation; //Level Cycle Offset - Should be an array
      this.nextMarkerRotation = nextMarkerRotation; //Marker Cycle oFfset - Should be an array
    
      this.rotationIndex = 0; //Where the level is currently on 
      this.markerRotationIndex = 0; //Where the marker is currently on
  }
}

module.exports.Depth = Depth;
