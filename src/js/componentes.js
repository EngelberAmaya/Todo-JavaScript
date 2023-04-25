const divTodoList = document.querySelector('.todo-list');

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