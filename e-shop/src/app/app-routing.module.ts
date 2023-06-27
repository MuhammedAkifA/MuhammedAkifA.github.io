import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "@app/app.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    loadChildren: () => import('./modules/app-layout/app-layout.module').then(m => m.AppLayoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
