import { Component, OnInit } from '@angular/core'
import { INativeTrackingControls } from '../native'

@Component({
  selector: 'app-tracking-control',
  templateUrl: './tracking-control.component.html',
  styleUrls: ['./tracking-control.component.css']
})
export class TrackingControlComponent implements OnInit 
{
    constructor() { }

    ngOnInit() { }

    onToggle()
    {
        NativeTrackingControls.toggleMode()
    }
}

declare var NativeTrackingControls: INativeTrackingControls
