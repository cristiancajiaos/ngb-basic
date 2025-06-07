import {Component, Input} from '@angular/core';
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgbAlert],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  @Input() body: string = '';
  @Input() dismissible: boolean = false;
}
