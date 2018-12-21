import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'toTime'
})
export class ToTimePipe implements PipeTransform {
    transform(value?: number): string {
        if (value != undefined) {
            const hour = Math.floor(value / 3600)
            value %= 3600
            const minute = Math.floor(value / 60)
            value %= 60
            return hour 
                ? `${hour}:${pad(minute, 2)}:${pad(value, 2)}` 
                : `${pad(minute, 2)}:${pad(value, 2)}`
        } else
            return "-"
    }    
}

function pad(num: number, size: number) {
    let s = num + ""
    while (s.length < size)
        s = "0" + s
    return s
}
