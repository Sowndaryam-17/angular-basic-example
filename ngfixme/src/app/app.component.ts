

import {Component} from '@angular/core';
import {Todo} from './app.todo';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {

  // newTodo: Todo = new Todo();
   model = new Todo();

  constructor(private todoDataService: AppService) {
  }

  addTodo() {
alert(this.model.name);

    this.todoDataService.addTodo(this.model);
    
  }


  updateTodo(){

   // this.todoDataService.addTodo(this.model.id);

  }

  
}