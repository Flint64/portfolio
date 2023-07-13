import { Component, OnInit } from '@angular/core';
import { TransferService } from './services/transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private transferService: TransferService){}

  //Check the matchMedia for the mediaQuery to see if we're in the mobile or desktop view.
  //Send that data to the header component so that we can adjust the display accordingly
  ngOnInit(): void {
    this.transferService.setData(window.matchMedia("(min-width: 600px)").matches);
  }
  
}


