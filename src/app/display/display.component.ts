import { Component, OnInit, NgZone } from '@angular/core'

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
    constructor(private zone: NgZone) {
        displayApp = this
    }

    ngOnInit() {}

    gpsActive = false
    heartRate : number

    setGpsActive() { this.zone.run(() => this.gpsActive = true) }

    onHeartRateChanged(heartRate: number) {
        this.zone.run(() => this.heartRate = heartRate)
    }
}

declare var displayApp: DisplayComponent