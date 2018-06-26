import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './components/template/template.component';
import { DataComponent } from './components/data/data.component';

const routes: Routes = [
  { path: 'template', component: TemplateComponent },
  { path: 'data', component: DataComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'template' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
