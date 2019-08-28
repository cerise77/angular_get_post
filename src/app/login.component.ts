import { Component, ViewChild, ViewChildren, ElementRef, Renderer2 } from '@angular/core';
import { HttpService } from './http.service';
import { User } from './user';
import {Router} from '@angular/router';


@Component({
    selector: 'login-app',
    templateUrl: './html/app.component.html',
    styleUrls: ['./css/app.component.css'],
    providers: [HttpService]
})
export class LoginComponent {

    user: User = new User();
    // @ViewChild ('toList') toList: ElementRef;


    constructor(private httpService: HttpService, private renderer: Renderer2, private elRef: ElementRef, private router: Router) { }

    submit(user: User) {

        let loginObj = {};

        this.httpService.getData(user)
            .subscribe(
                (request:User) => {

                  loginObj = request;
                  localStorage.setItem("loginObj", JSON.stringify(loginObj));

                  this.router.navigate(['/list']);

                  // console.log(localStorage);
                },
                (error) => console.log(error)
            );
    }

}
