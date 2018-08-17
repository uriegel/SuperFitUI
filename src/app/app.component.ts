import { Component, OnInit } from '@angular/core'

@Component(
{
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit
{
    hash = ""
    
    ngOnInit() 
    {
        this.hash = location.hash

        onhashchange = () => this.hash = location.hash
    }
}
