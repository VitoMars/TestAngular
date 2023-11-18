import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
import { CardExampleComponent } from './components/card-example/card-example.component';
import { TestLifecycleComponent } from './components/test-lifecycle/test-lifecycle.component';
import { ProvaComponent } from './components/prova/prova.component';
import { TrafficlightComponent } from './components/trafficlight/trafficlight.component';
import { ChiediFelicitaComponent } from './components/chiedi-felicita/chiedi-felicita.component';

const routes: Routes = [
  { path: '', component: TestLifecycleComponent },
  { path: 'prova', component: ProvaComponent },
  { path: 'test-lifecycle', component: TestLifecycleComponent },
  { path: 'card-example', component: CardExampleComponent },
  { path: 'traffic-light', component: TrafficlightComponent },
  { path: 'chiedi-felicita', component: ChiediFelicitaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
