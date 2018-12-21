import { Component } from '@angular/core'
import { IMapViewControls } from '../native'

@Component({
    selector: 'app-map-view-controls',
    templateUrl: './map-view-controls.component.html',
    styleUrls: ['./map-view-controls.component.css']
})
export class MapViewControlsComponent {
    isHidden = true
    
    toggleControls() {
        NativeMapControls.doHapticFeedback()
        this.isHidden = !this.isHidden
    }

    onSave() {
        NativeMapControls.saveTrack()
    }

    onDelete() {
        NativeMapControls.deleteTrack()
    }
}

declare var NativeMapControls: IMapViewControls
