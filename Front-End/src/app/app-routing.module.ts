import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LogComponent } from './Components/log/log.component';
import { SigComponent } from './Components/sig/sig.component';

const routes: Routes = [
  {path: '', pathMatch: 'full',redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'home', component: HomeComponent, children: [
    {path: 'log', component: LogComponent},
    {path: 'sig', component: SigComponent}
  ]},
  {path: '**', redirectTo: '/home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
