import { ChangeDetectorRef, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChildren('projectText') projectText: QueryList<ElementRef>;
  @ViewChildren('expandButton') expandButton: QueryList<ElementRef>;
  @ViewChildren('projectWrapper') projectWrapper: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
    
  }

}
