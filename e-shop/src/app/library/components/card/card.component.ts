import {Component, Input} from '@angular/core';
import {Template, TemplateRefModel} from "../../types/directive/template";

@Component({
  selector: 'ak-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  src?: string;

  @Input()
  alt?: string = '';

  readonly HEADER_SELECTOR: Template = TemplateRefModel.HEADER;
  readonly CONTENT_SELECTOR: Template = TemplateRefModel.CONTENT;
  readonly FOOTER_SELECTOR: Template = TemplateRefModel.FOOTER;

}
