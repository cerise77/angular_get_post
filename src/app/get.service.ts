import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Human } from './table';


@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    getData(loginObj:any) {

        const myHeaders = new HttpHeaders({
          'Authorization': 'Bearer ' + loginObj.access_token
          // 'Authorization': 'Bearer'
        });

        return this.http.get('https://testapi.minmenu.com/api/account/users/?departmentFilter=true&activeUserFilter=true&userNameFilter=&firstNameFilter=&lastNameFilter=&mailFilter=&roleFilter=&nameColumn=userRoom&sortDirection=asc&roomNumberFilter', { headers: myHeaders });

    }
}
