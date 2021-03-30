import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public lat = -37.813179;
  public lng = 144.950259;
  public zoom = 12;
  constructor() { }

  ngOnInit(): void {
  }

}
