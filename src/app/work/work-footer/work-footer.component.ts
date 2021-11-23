import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-work-footer',
  templateUrl: './work-footer.component.html',
  styleUrls: ['./work-footer.component.css']
})
export class WorkFooterComponent implements OnInit {
  // onPressWork() {
  //   this.router.navigate(['/work']).then();
  // }

  constructor(private router: Router) { }

  onPressContact() {
    this.router.navigate(['/contact']).then();
  }

  ngOnInit(): void {
  }

}
