import { Component, OnInit, NgZone } from '@angular/core'
import { MainState } from '../enums/main-state'
import { INative, ServiceState } from '../native'

@Component(
{
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit 
{
    state = MainState.Stopped

    constructor(private zone: NgZone) { }

    ngOnInit() 
    { 
        mainApp = this
        Native.getState()
    }

    onStateChanged(state: ServiceState) 
    {
        this.zone.run(() => 
        {
            switch (state)
            {
                case ServiceState.Started:
                    this.state = MainState.Started
                    break
                case ServiceState.Stopped:
                    this.state = MainState.Stopped
                    break
                default:
                    this.state = MainState.Transition
                    break
            }
        })
    }

    doHapticFeedback() 
    {
        Native.doHapticFeedback()
    }

    start()
    {
        Native.start()
    }

    display()
    {
        Native.display()
    }

    reset()
    {
        Native.reset()
    }

    stop()
    {
        Native.stop()
    }
}

declare var Native: INative
declare var mainApp: MainComponent

