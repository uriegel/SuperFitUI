import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { MainComponent } from './main/main.component'
import { UmobilekitModule } from 'umobilekit';
import { TracksComponent } from './tracks/tracks.component';
import { TrackComponent } from './svgs/track/track.component';
import { TrackTitlePipe } from './pipes/track-title.pipe'

@NgModule({
    declarations: 
    [
        AppComponent,
        MainComponent,
        TracksComponent,
        TrackComponent,
        TrackTitlePipe
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
