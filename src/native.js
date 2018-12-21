
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

function onBikeDataChanged(speed, maxSpeed, averageSpeed, distance, timeSpan, cadence) {
    displayApp.onBikeDataChanged(speed, maxSpeed, averageSpeed, distance, timeSpan, cadence)
}

var mainApp
var tracksApp   
var displayApp