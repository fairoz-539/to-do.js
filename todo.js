const todoList = [{name:'wash dishes',dueDate:'06-09-2003'},{name:'play football',dueDate:'06-09-2003'}];

renderTodolist();

function renderTodolist(){
        let todoListHTML = '';

        for(let i = 0; i < todoList.length; i++){
            const todoObject = todoList[i]; 
            const {name,dueDate} = todoObject;
            //const dueDate = todoObject.dueDate;
            const html = `<div>${name}</div><div> ${dueDate}</div><button onclick = " todoList.splice(${i},1)
            renderTodolist();" class="btn1">Delete</button>`;
            todoListHTML += html;
        }

        

        document.querySelector('.js-list').innerHTML = todoListHTML;
    }

function addTodo(){
    let inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({name,dueDate});
    

    inputElement.value = ''; 
    dateInputElement.value = '';

    renderTodolist();
}