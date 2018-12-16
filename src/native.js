
function onStateChanged(state) {
    mainApp.onStateChanged(state) 
}

function onTracks(tracks) {
    tracksApp.onTracks(tracks) 
}

function deleteTrack(trackNr) {
    tracksApp.deleteTrack(trackNr) 
}

function setGpsActive() {
    displayApp.setGpsActive()
}

function onHeartRateChanged(heartRate) {
    displayApp.onHeartRateChanged(heartRate)
}

var mainApp
var tracksApp   
var displayApp