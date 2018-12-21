import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { MainComponent } from './main/main.component'
import { UmobilekitModule } from 'umobilekit';
import { TracksComponent } from './tracks/tracks.component'
import { TrackComponent } from './svgs/track/track.component'
import { TrackTitlePipe } from './pipes/track-title.pipe'
import { TrackingControlComponent } from './tracking-control/tracking-control.component'
import { MenuComponent } from './svgs/menu/menu.component'
import { DisplayComponent } from './display/display.component'
import { DisplayNumberPipe } from './pipes/display-number.pipe'
import { ToTimePipe } from './pipes/to-time.pipe';
import { MapViewControlsComponent } from './map-view-controls/map-view-controls.component'

@NgModule({
    declarations: 
    [
        AppComponent,
        MainComponent,
        TracksComponent,
        TrackComponent,
        TrackTitlePipe,
        TrackingControlComponent,
        MenuComponent,
        DisplayComponent,
        DisplayNumberPipe,
        ToTimePipe,
        MapViewControlsComponent
    ],
    imports: 
    [
        BrowserModule,
        UmobilekitModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
