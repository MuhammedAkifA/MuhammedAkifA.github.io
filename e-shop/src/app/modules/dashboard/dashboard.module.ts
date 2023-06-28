import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LibraryModule} from "@app/library/library.module";


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    LibraryModule,
    DashboardRoutingModule,
    NgOptimizedImage,
  ]
})
export class DashboardModule {
}
