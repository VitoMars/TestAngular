// Angular Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// MatModule
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
// Components
import { CardExampleComponent } from './components/card-example/card-example.component';
import { TestLifecycleComponent } from './components/test-lifecycle/test-lifecycle.component';
import { ProvaComponent } from './components/prova/prova.component';
import { TestServiceService } from './services/test-service.service';
import { TrafficlightComponent } from './components/trafficlight/trafficlight.component';
import { ChiediFelicitaComponent } from './components/chiedi-felicita/chiedi-felicita.component';
import { RispondiFelicitaComponent } from './components/rispondi-felicita/rispondi-felicita.component';
import { UsersComponent } from './components/users/users.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { ScssComponent } from './components/scss/scss.component';
import { FormsComponent } from './components/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestLifecycleComponent,
    ProvaComponent,
    CardExampleComponent,
    TrafficlightComponent,
    ChiediFelicitaComponent,
    RispondiFelicitaComponent,
    UsersComponent,
    ChildComponent,
    ParentComponent,
    ScssComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    CommonModule, 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatListModule,
  ],
  providers: [TestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
