import { Component } from '@angular/core';

const TRAFFIC_LIGHTS = ["Verde", "Arancione", "Rosso"];

@Component({
  selector: 'app-trafficlight',
  templateUrl: './trafficlight.component.html',
  styleUrls: ['./trafficlight.component.scss']
})
export class TrafficlightComponent {
  lightIndex = 0;
  // light = TRAFFIC_LIGHTS[this.lightIndex];

  // Alternativa
  get light() {
    return TRAFFIC_LIGHTS[this.lightIndex]
  }
  
  nextLight() {
    this.lightIndex += 1;

    if (this.lightIndex >= TRAFFIC_LIGHTS.length) {
      this.lightIndex = 0;
    }

    // this.light = TRAFFIC_LIGHTS[this.lightIndex];
  }
}
