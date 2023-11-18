import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardExampleComponent } from './components/card-example/card-example.component';
import { TestLifecycleComponent } from './components/test-lifecycle/test-lifecycle.component';
import { ProvaComponent } from './components/prova/prova.component';
import { TestServiceService } from './services/test-service.service';
// MatModule
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TrafficlightComponent } from './components/trafficlight/trafficlight.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestLifecycleComponent,
    // ProvaComponent,
    CardExampleComponent,
    TrafficlightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatToolbarModule
  ],
  providers: [TestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
