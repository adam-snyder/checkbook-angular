import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../../amplify/data/resource';

const client = generateClient<Schema>();

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [ CommonModule, AmplifyAuthenticatorModule, FormsModule ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: any[] = [];

  ngOnInit(): void {
    this.listTodos();
  }

  listTodos() {
    try {
      client.models.Todo.observeQuery().subscribe({
        next: ({ items, isSynced }) => {
          this.todos = items;
        },
      });
    } catch (error) {
      console.error('error fetching todos', error);
    }
  }

  createTodo() {
    try {
      client.models.Todo.create({
        content: window.prompt('Todo content'),
        isDone: false,
      });
      this.listTodos();
    } catch (error) {
      console.error('error creating todos', error);
    }
  }

  deleteTodo(id: string) {
    client.models.Todo.delete({ id });
  }

  completeTodo(event: MouseEvent, id: string) {
    event.stopPropagation();
    client.models.Todo.update({ id, isDone: true });
  }
}
