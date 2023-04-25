import { todoList } from "..";
import { Todo } from "../classes";

const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

export const crearTodoHtml = (todo) => {

    const htmlTodo = `
        <li class="${ (todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
            <div class="view">
                <input type="checkbox" class="toggle" ${ (todo.completado) ? 'checked' : ''}>
                <label for="">${ todo.tarea }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" type="text" value="Create a TodoMVC template">
        </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);
    return div.firstElementChild;
}

// Eventos

txtInput.addEventListener('keyup', (event) => {
    if (event.keyCode === 13 && txtInput.value.length > 0) {        
        //console.log(txtInput.value);
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value = '';
    }
});

divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName; // input, label, buttom
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    //console.log(todoId);

    if (nombreElemento.includes('input')) { // click en el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    }
    console.log(todoList);
});