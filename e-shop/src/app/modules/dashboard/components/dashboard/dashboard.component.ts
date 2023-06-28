import { Component } from '@angular/core';
import {Template, TemplateRefModel} from "@app/library/types/directive/template";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  HEADER_SELECTOR: Template = TemplateRefModel.HEADER
}
