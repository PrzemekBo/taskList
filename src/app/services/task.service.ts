import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Task} from '../model/task';
import {HttpService} from './http.service';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable()
export class TaskService {
  private tasksListObs = new BehaviorSubject<Array<Task>>([]);

  constructor(private httpService: HttpService, public angularFire: AngularFireAuth) {
    angularFire.authState.subscribe(user => {
      if (user) {
        this.init();
      } else {
        this.tasksListObs.next([]);
      }
    });
  }

  init() {
    this.httpService.getTasks().subscribe(list => {
      this.tasksListObs.next(list);
    });
  }

  add(task: Array<Task>) {
    const list = this.tasksListObs.getValue().concat(task);
    this.tasksListObs.next(list);
  }

  remove(task: Task) {
    const list = this.tasksListObs.getValue().filter(e => e !== task);
    this.tasksListObs.next(list);
  }

  done(task: Task) {
    task.end = new Date().toLocaleDateString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }
  saveTasksInDb() {
    this.httpService.saveTasks(this.tasksListObs.getValue());
  }


}
