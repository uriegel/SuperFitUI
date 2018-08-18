import { Pipe, PipeTransform } from '@angular/core'
import { TrackData } from '../native';

@Pipe(
{
    name: 'trackTitle'
})
export class TrackTitlePipe implements PipeTransform 
{
    transform(track: TrackData): string
    {
        if (track.name)
            return track.name
        const date = new Date(track.time)
        return date.toLocaleString(undefined, 
        {
            year: "numeric", month: "2-digit",
            day: "2-digit", hour: "2-digit", minute: "2-digit"
        })
    }
}
