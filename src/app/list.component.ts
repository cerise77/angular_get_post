import { Component, OnInit, ElementRef, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import { HttpService } from './get.service';
// import { Human } from './table';
import {Router} from '@angular/router';


@Component({
    selector: 'list-app',
    templateUrl: './html/list.component.html',
    styleUrls: ['./css/list.css'],
    providers: [HttpService]
})

// export class ListComponent {
export class ListComponent implements OnInit {

  loginObj = JSON.parse(localStorage.getItem("loginObj"));
  error:any;
  humans: any;

  // @ViewChild ('quantityPopup') quantityPopup: ElementRef;

  constructor(private httpService: HttpService, private renderer: Renderer2, private elRef: ElementRef, private router: Router) { }

  ngOnInit(){

    this.httpService.getData(this.loginObj).subscribe(
      (data) => {

      this.humans=data;

      // console.log(this.humans);
    },

      (error:any) => {this.error = error.message; console.log(error);}

    )

  }

  /*profilClick(){
    this.router.navigate(['/profil']);

  }*/


  quantityA(){
    let quntityPopupQ =  document.querySelector(".quantity-popup");
    let backgroundPopupQ = document.querySelector(".myfondGris");

    this.renderer.setStyle(quntityPopupQ, 'display', 'block');
    this.renderer.setStyle(backgroundPopupQ, 'display', 'block');

  }


  close(){
    let quntityPopupW = document.querySelector(".quantity-popup");
    let portionPopupW = document.querySelector(".portion-popup");
    let backgroundPopupW = document.querySelector(".myfondGris");

    this.renderer.setStyle(quntityPopupW, 'display', 'none');
    this.renderer.setStyle(backgroundPopupW, 'display', 'none');
    this.renderer.setStyle(portionPopupW, 'display', 'none');
  }

  portionA(){

    let portionPopup = document.querySelector(".portion-popup");
    let backgroundPopup = document.querySelector(".myfondGris");

    this.renderer.setStyle(portionPopup, 'display', 'block');
    this.renderer.setStyle(backgroundPopup, 'display', 'block');

  }

}
