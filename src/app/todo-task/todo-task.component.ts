import {Component, OnInit} from '@angular/core';
import {TaskService} from '../services/task.service';
import {Task} from '../model/task';


@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

  tasksList: Array<Task> = [];

  constructor(private tasksService: TaskService) {
    console.log('TodoTaskComponent');
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks.slice();
    });
  }

  ngOnInit() {
  }

  remove(task: Task) {
    this.tasksService.remove(task);
  }

  done(task: Task) {
    task.end = new Date();
    this.tasksService.done(task);
  }

  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}