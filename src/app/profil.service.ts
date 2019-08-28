import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router';
// import {Location} from '@angular/common';
// import { Human } from './table';


@Injectable()
export class HttpService {

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

    getData(loginObj:any) {

        const myHeaders = new HttpHeaders({
          'Authorization': 'Bearer ' + loginObj.access_token
          // 'Authorization': 'Bearer'
        });

        return this.http.get('https://testapi.minmenu.com/api/account/userinfo?id=' + this.router.navigate(['human?.id']), { headers: myHeaders });
        // return this.http.get('https://testapi.minmenu.com/api/account/userinfo?id=', { headers: myHeaders });

        // window.location.href = '#list';
        // this.router.navigate(['/list']);
        // return this.http.get('https://testapi.minmenu.com/api/account/userinfo?id=' + $location.search().id, { headers: myHeaders });

    }
}
