
export interface INative {
    getState(): string
    doHapticFeedback(): void
    finish(): void
    start(): void
    stop(): void
    reset(): void
    display(): void
    fillTracks(): void
    fillMaps(): void
    onTrackSelected(number: Number): void
    onMapSelected(map: string): void
}

export interface INativeTrackingControls {
    toggleMode(): any
}

export interface IMapViewControls {
    doHapticFeedback(): any
    saveTrack(): any
    deleteTrack(): any
}

export enum ServiceState {
    Stopped = "Stopped",
    Starting = "Starting",
    Started = "Started",
    Stopping = "Stopping"
}

export declare class TrackData {
    trackNr: number
    name: string
    distance: number
    averageSpeed: number
    time: number
}

