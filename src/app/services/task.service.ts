import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Task} from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  private tasksListObs = new BehaviorSubject<Array<Task>>([]);


  constructor() {

    const tasksList = [
      {name: 'Sprzątanie kuwety', created: new Date().toLocaleString(), isDone: false},
      {name: 'Nauka Angulara', created: new Date().toLocaleString(), isDone: false},
      {name: 'Podlewanie kwiatów', created: new Date().toLocaleString(), isDone: false},
      {name: 'Zakupy', created: new Date().toLocaleString(), isDone: false}
    ];
    this.tasksListObs.next(tasksList);
  }

  add(task: Task) {
    const list = this.tasksListObs.getValue();
    list.push(task);
    this.tasksListObs.next(list);
  }

  remove(task: Task) {
    const list = this.tasksListObs.getValue().filter(e => e !== task);
    this.tasksListObs.next(list);
  }

  done(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }


}
