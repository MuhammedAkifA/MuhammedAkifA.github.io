import {NgModule} from '@angular/core';
import {AkTemplateDirective} from "./directive/ak-template.directive";
import {CardComponent} from "./components/card/card.component";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AkTemplateDirective,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AkTemplateDirective,
    CardComponent,
  ]
})
export class LibraryModule {
}
