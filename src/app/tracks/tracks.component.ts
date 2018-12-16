import { Component, OnInit, NgZone } from '@angular/core'
import { INative, TrackData } from '../native'

@Component
({
    selector: 'app-tracks',
    templateUrl: './tracks.component.html',
    styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

    tracks: TrackData[]

    constructor(private zone: NgZone) { }

    ngOnInit() {
        tracksApp = this
        Native.fillTracks()
    }

    onTracks(tracks: TrackData[]) {
        this.zone.run(() => this.tracks = tracks)
    }

    doHapticFeedback() { Native.doHapticFeedback() }

    showTrack(track: TrackData) { Native.onTrackSelected(track.trackNr) }

    deleteTrack(trackNr: Number) {
        this.zone.run(() => this.tracks = this.tracks.filter(n => n.trackNr != trackNr))
    }
}

declare var Native: INative
declare var tracksApp: TracksComponent