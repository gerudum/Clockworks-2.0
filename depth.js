
class Depth {
  constructor(name,initLevelDate,initMarkerDate,levels,marker,rotationTime,markerRotationTime,nextRotation,nextMarkerRotation){
      this.name = name; //Name of the depth
      this.initLevelDate = initLevelDate; //The date is was that position
      this.initMarkerDate = initMarkerDate; //The date the marker was at that position
      this.levels = levels; //The current levels
      this.marker = marker; //The current marker
      this.rotationTime = rotationTime; //How long it takes to rotate levels 
      this.markerRotationTime = markerRotationTime; //How long it takes to rotate marker
      this.nextRotation = nextRotation; //Level Cycle Offset
      this.nextMarkerRotation = nextMarkerRotation; //Marker Cycle oFfset
  }
}

module.exports.Depth = Depth;
