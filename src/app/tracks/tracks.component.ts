import { Component, OnInit, NgZone } from '@angular/core'
import { INative, TrackData } from '../native'

@Component({
    selector: 'app-tracks',
    templateUrl: './tracks.component.html',
    styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

    tracks: TrackData[]

    constructor(private zone: NgZone) { }

    ngOnInit() 
    {
        tracksApp = this
        Native.fillTracks()
    }

    onTracks(tracks: TrackData[]) 
    {
        console.log("tracks", tracks)
        this.zone.run(() => this.tracks = tracks)
    }
}

declare var Native: INative
declare var tracksApp: TracksComponent