import { Component, OnInit } from '@angular/core';
import { Kaur4799 } from "../kaur4799";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currStudent: Kaur4799 = {
    sid: 991504334, sname: "Diljot Kaur",
    slogin: "kaur4799", scampus: "Davis", 
    atitle: "Assignment3"
  }

  constructor() { }

  ngOnInit() {
  }

}
