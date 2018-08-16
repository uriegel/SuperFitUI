import { Component, OnInit } from '@angular/core'
import { MainState } from '../enums/main-state'

@Component(
{
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit 
{
    state = MainState.Stopped

    constructor() { }

    ngOnInit() { }

}
