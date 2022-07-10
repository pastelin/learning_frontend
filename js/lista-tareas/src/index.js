import './styles.css';

import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( (todo) => crearTodoHtml(todo) );

// Es lo mismo que el codigo del arriba, y esto solo se puede hacer cuando se tiene un solo parametro
// todoList.todos.forEach( crearTodoHtml );