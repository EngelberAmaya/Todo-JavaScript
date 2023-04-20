import { Todo, TodoList } from './classes';
import './styles.css';

const tarea = new Todo('Aprender Javascript');
const todoList = new TodoList();

todoList.nuevoTodo(tarea)

console.log(todoList);