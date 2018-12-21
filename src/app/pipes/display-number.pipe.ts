import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'displayNumber'
})
export class DisplayNumberPipe implements PipeTransform {
    transform(value?: number, digits: number = 0): string {
        return value != undefined ? value.toFixed(digits) : "-"
    }
}
