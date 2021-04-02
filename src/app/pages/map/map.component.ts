import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public lat = 21.0227788;
  public lng = 105.8194541;
  public zoom = 15;
  constructor() { }

  ngOnInit(): void {
  }

}
