import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AddTaskComponent} from './add-task/add-task.component';
import {TodoTaskComponent} from './todo-task/todo-task.component';
import {DoneTaskComponent} from './done-task/done-task.component';
import {TaskService} from './services/task.service';

import {CheckedDirective} from './shared/checked.directive';
import {DateDirective} from './shared/date.directive';
import {TransformPipePipe} from './shared/transform-pipe.pipe';
import {SortNamePipe} from './shared/sort-name.pipe';
import {HttpService} from './services/http.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app.routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoTaskComponent,
    DoneTaskComponent,
    CheckedDirective,
    DateDirective,
    TransformPipePipe,
    SortNamePipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [TaskService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
