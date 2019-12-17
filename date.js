
function OffsetDate(init, offset){
	var nextDate = new Date(init);
	nextDate.SetSeconds(init.GetSeconds() + offset);
	return nextDate;
}

function SetDate(depth, setmarker = false){
    var init = new Date();

    //Sets a specific date, we will add offsets to this date in order to produce a swap time.
    if(setmarker === false){
        init.setMonth(depth.month);
        init.setDate(depth.day);
        init.setHours(depth.hour);
        init.setMinutes(depth.minute);
        init.setSeconds(depth.second);
    
    } else {
        init.setMonth(depth.month);
        init.setDate(depth.day);
        init.setHours(depth.marker_hour);
        init.setMinutes(depth.marker_minute);
        init.setSeconds(depth.marker_second);
    }
    
   // //console.log("Init " + initialize);
    return initialize;
}

function GetLocaleDate(rawDate, timezone = 0){
    var date = new Date(rawDate);

    var est = date.getTime() +(date.getTimezoneOffset() * 60000)
    var newDate =  new Date(est + (3600000*timezone));

    return newDate.toLocaleString();
}

module.exports.SetDate = SetDate;
module.exports.GetLocaleDate = GetLocaleDate;
module.exports.OffsetDate = OffsetDate;
