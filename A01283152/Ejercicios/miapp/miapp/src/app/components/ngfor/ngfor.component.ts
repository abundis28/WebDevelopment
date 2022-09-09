import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  title = '025 dirNgFor'
  public nombres = [
    {nom:"uno",edad:10},
    {nom:"dos",edad:20},
    {nom:"tres",edad:30}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
