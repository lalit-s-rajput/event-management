import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { allRoutes } from './routes';
const routes: Routes = allRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
