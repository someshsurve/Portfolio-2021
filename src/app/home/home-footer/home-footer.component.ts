import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-footer',
  templateUrl: './home-footer.component.html',
  styleUrls: ['./home-footer.component.css']
})
export class HomeFooterComponent implements OnInit {

  constructor(private router: Router) { }
  onPressWork() {
    this.router.navigate(['/work']).then();
  }

  onPressContact() {
    this.router.navigate(['/contact']).then();
  }

  ngOnInit(): void {
  }

}
