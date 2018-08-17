import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { MainComponent } from './main/main.component'
import { UmobilekitModule } from 'umobilekit';
import { TracksComponent } from './tracks/tracks.component'

@NgModule({
    declarations: 
    [
        AppComponent,
        MainComponent,
        TracksComponent
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
