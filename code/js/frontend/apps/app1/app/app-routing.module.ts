import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreetingComponent } from './pages/greeting/greeting.component';

const routes: Routes = [
  {
    path: '',
    component: GreetingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
