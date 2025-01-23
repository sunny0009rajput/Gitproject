import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MathsComponent } from './component/maths/maths.component';
import { EnglishComponent } from './component/english/english.component';
import { GkComponent } from './component/gk/gk.component';
import { ReasoningComponent } from './component/reasoning/reasoning.component';
import { ScienceComponent } from './component/science/science.component';

const routes: Routes = [
  
  {path: '',redirectTo: '/maths',pathMatch:'full'},
  {path: 'maths', component:MathsComponent},
  {path: 'reasoning', component:ReasoningComponent},
  {path: 'gk', component:GkComponent},
  {path: 'science', component:ScienceComponent},
  {path: 'english', component:EnglishComponent},
  {path: '**', redirectTo: '/maths'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
