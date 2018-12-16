import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'notNull'
})
export class NotNullPipe implements PipeTransform {

    transform(value?: number): string {
        return value ? value.toString() : "-  pppp"
    }

}
