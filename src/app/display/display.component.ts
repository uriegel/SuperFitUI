import { Component, NgZone } from '@angular/core'

@Component({
    selector: 'app-display',
    templateUrl: './display.component.html',
    styleUrls: ['./display.component.css']
})
export class DisplayComponent {
    constructor(private zone: NgZone) {
        displayApp = this
    }

    gpsActive = false
    heartRate : number
    speed: number
    maxSpeed: number
    averageSpeed: number
    distance: number
    timeSpan: number
    cadence: number

    setGpsActive() { this.zone.run(() => this.gpsActive = true) }

    onHeartRateChanged(heartRate: number) {
        this.zone.run(() => this.heartRate = heartRate)
    }

    onBikeDataChanged(speed: number, maxSpeed: number, averageSpeed: number, distance: number, timeSpan: number, cadence: number) {
        this.speed = speed
        this.maxSpeed = maxSpeed
        this.averageSpeed = averageSpeed
        this.distance = distance
        this.cadence = cadence
        this.timeSpan = timeSpan
    }
}

declare var displayApp: DisplayComponent