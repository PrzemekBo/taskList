import {Component, OnInit} from '@angular/core';
import {TaskService} from '../services/task.service';
import {Task} from '../model/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask: string;

  constructor(private tasksService: TaskService) {
  }

  ngOnInit() {
  }

  add() {
    const task: Task = {name: this.newTask, created: new Date().toLocaleString(), isDone: false};
    this.tasksService.add(task);
    this.newTask = '';
  }

}
