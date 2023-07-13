import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('header') header: ElementRef;
  @ViewChild('headerLinks') headerLinks: ElementRef;

  constructor(private transferService: TransferService) { }

  showHeaderDetails: boolean = false;
  headerOpen: boolean = false;
  
  //Get the matchMedia details from the app-root to see if we're in mobile or desktop view
  //so that we can adjust the display accordingly
  ngOnInit(): void {
    this.showHeaderDetails = this.transferService.getData();
  }

  toggleMenu(){
    // window.scrollTo(0, 0);
    if (this.header.nativeElement.classList.contains('openedHamburgerMenu')){
      this.header.nativeElement.classList.remove('openedHamburgerMenu');
      this.header.nativeElement.classList.add('closedHamburgerMenu');
      return;
    }
    
    this.header.nativeElement.classList.add('openedHamburgerMenu');
    this.headerOpen = !this.headerOpen;
  }

}
