import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;
  @Input()
  i!: number;

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  OnClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("Onclick has been triggered.")
  }
  onCheckBoxClick(todo: Todo | undefined){
    console.log(todo);
    this.todoCheckbox.emit(todo);

  }

}
