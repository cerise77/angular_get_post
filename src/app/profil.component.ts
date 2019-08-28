import { Component, OnInit, ElementRef, Renderer2, ViewChild, ViewChildren} from '@angular/core';
import { HttpService } from './profil.service';
// import { Human } from './table';
import {Router} from '@angular/router';


@Component({
    selector: 'profil-app',
    templateUrl: './html/profil.component.html',
    styleUrls: ['./css/profiler.css'],
    providers: [HttpService]
})


export class ProfilComponent implements OnInit {

  loginObj = JSON.parse(localStorage.getItem("loginObj"));
  error:any;
  userInfo: any;

  constructor(private httpService: HttpService, private renderer: Renderer2, private elRef: ElementRef,private router: Router) { }

  ngOnInit(){
    this.httpService.getData(this.loginObj).subscribe(
      (data:any) => {

      this.userInfo=data;

      console.log(this.userInfo);
    },

      (error:any) => {this.error = error.message; console.log(error);}

    )

  }



}
