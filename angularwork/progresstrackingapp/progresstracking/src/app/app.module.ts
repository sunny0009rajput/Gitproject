import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatProgressBarModule } from '@angular/material/progress-bar';  // Import progress bar module
import { MatCheckboxModule } from '@angular/material/checkbox';  // Import checkbox module
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MathsComponent } from './component/maths/maths.component';
import { ReasoningComponent } from './component/reasoning/reasoning.component';
import { EnglishComponent } from './component/english/english.component';
import { GkComponent } from './component/gk/gk.component';
import { ScienceComponent } from './component/science/science.component';  // Import FormsModule for ngModel two-way data binding

@NgModule({
  declarations: [
    AppComponent,
  
    MathsComponent,
    ReasoningComponent,
    EnglishComponent,
    GkComponent,
    ScienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule, // Add MatIconModule here
    MatProgressBarModule,  // Include Material progress bar
    MatCheckboxModule,  // Include Material checkbox
    FormsModule  // Required for ngModel (checkbox two-way binding)
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
