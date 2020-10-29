import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProtectedPageComponent} from './protected-page.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  {
    path: 'protected',
    component: ProtectedPageComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
