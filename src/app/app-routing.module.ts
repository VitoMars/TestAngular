import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
import { CardExampleComponent } from './components/card-example/card-example.component';
import { TestLifecycleComponent } from './components/test-lifecycle/test-lifecycle.component';
import { ProvaComponent } from './components/prova/prova.component';
import { TrafficlightComponent } from './components/trafficlight/trafficlight.component';
import { ChiediFelicitaComponent } from './components/chiedi-felicita/chiedi-felicita.component';
import { UsersComponent } from './components/users/users.component';
import { ParentComponent } from './components/parent/parent.component';
import { ScssComponent } from './components/scss/scss.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
  { path: '', component: TestLifecycleComponent },
  { path: 'prova', component: ProvaComponent },
  { path: 'test-lifecycle', component: TestLifecycleComponent },
  { path: 'card-example', component: CardExampleComponent },
  { path: 'traffic-light', component: TrafficlightComponent },
  { path: 'chiedi-felicita', component: ChiediFelicitaComponent },
  { path: 'users', component: UsersComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'scss', component: ScssComponent },
  { path: 'forms', component: FormsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
