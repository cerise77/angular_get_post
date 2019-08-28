import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from './user';


@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    getData(user: User) {

        let loginData = 'grant_type=password&username=' + user.name + '&password=' + user.password;

        const myHeaders = new HttpHeaders({
          'Content-Type':  'application/x-www-form-urlencoded'
        });


        return this.http.post('https://testapi.minmenu.com/token', loginData, { headers: myHeaders });

    }
}
