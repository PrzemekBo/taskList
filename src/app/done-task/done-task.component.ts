import {Component, OnInit} from '@angular/core';
import {TaskService} from '../services/task.service';
import {Task} from '../model/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {


  tasksDone: Array<Task> = [];

  constructor(private tasksService: TaskService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksDone = tasks.filter(t => t.isDone === true);
    });
  }

  ngOnInit() {
  }


}
