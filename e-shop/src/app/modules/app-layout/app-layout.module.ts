import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import {HeaderComponent} from "@app/components/header/header.component";
import {FooterComponent} from "@app/components/footer/footer.component";


@NgModule({
  declarations: [
    AppLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppLayoutRoutingModule
  ]
})
export class AppLayoutModule { }
