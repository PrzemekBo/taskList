import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {LoginComponent} from './auth/login/login.component';
import {AuthGuardService} from './auth/auth-guard.service';
import {AuthService} from './auth/auth.service';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';


const config = {
  apiKey: 'AIzaSyDHfCWRVBFrmS86VzOimH1fxgoeMKBUA9E',
  authDomain: 'todo-b2fe5.firebaseapp.com',
  databaseURL: 'https://todo-b2fe5.firebaseio.com',
  projectId: 'todo-b2fe5',
  storageBucket: 'todo-b2fe5.appspot.com',
  messagingSenderId: '342252752790'
};

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
    LoginComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [TaskService, HttpService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
