import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Task } from '../model/task';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class HttpService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/tasklist_db/collections/tasks';
  readonly param = new HttpParams().set('apiKey', 'UPcO8TylBLDoGGcl4f8O67bSf-MslMdy');

  constructor(private http: HttpClient, private authService: AuthService) {
    console.log('HttpService');
  }

  getParams(): HttpParams {
    const uid = this.authService.user.uid;
    const query = { userId: uid };
    return new HttpParams().set('apiKey', 'UPcO8TylBLDoGGcl4f8O67bSf-MslMdy').append('q', JSON.stringify(query));
  }

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Array<Task>>(this.URL_DB, { params: this.getParams() });
  }

  saveTasks(list: Array<Task>) {
    this.http.put(this.URL_DB, list, { params: this.getParams() }).subscribe(data => {
      console.log(data);
    });
  }
}
