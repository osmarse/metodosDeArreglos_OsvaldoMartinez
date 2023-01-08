const formulario = document.getElementById("formulario");
const total = document.getElementById("total");
const realizadas = document.getElementById("realizadas");
const lista = document.getElementById("lista");
const agregar = document.getElementById("agregarItem");

let todoList = [
    {
        id: 1,
        name: "Pan",
        completed: false,
    },
    {
        id: 2,
        name: "Arroz",
        completed: false,
    }
];

let todoId = todoList.length

const mostrar = () => {
    let list = ""
    completedTotal = 0
    todoList.forEach(item => {
        let status = ""
        if (item.completed) {
            status = "checked"
            completedTotal++
        }
        let template = `<li class="todo" style="list-style-type:none;">${item.id}.-  ${item.name}</li>
    <li style="list-style-type:none;">Marcar como realizada?&nbsp;&nbsp;&nbsp;<input ${status} type="checkbox" data-update="${item.id}"></li>
    <li style="list-style-type:none;"><button class="btn btn-danger" id="botonBorrado" data-delete="${item.id}">Borrar</button></li>`
        list += template
    });
    lista.innerHTML = list
    total.textContent = todoList.length
    realizadas.textContent = completedTotal
}

mostrar()

const addTodos = () => {
    if (!agregar.value == "") {
        todoId++
        let newTodo = {
            id: todoId,
            name: agregar.value,
            completed: false
        }
        todoList.push(newTodo)
        mostrar()
    } else {
        alert("Debe escribir una tarea para agregar.")
    }
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    addTodos()
})

lista.addEventListener("click", (e) => {
    deleteTodos(e)
    updateTodos(e)
})

const deleteTodos = (e) => {
    if (e.target.dataset.delete) {
        const id = e.target.dataset.delete
        const index = todoList.findIndex((item) => item.id == id)
        todoList.splice(index, 1)
        mostrar()
    }
}

const updateTodos = (e) => {
    if (e.target.dataset.update) {
        const id = e.target.dataset.update
        const index = todoList.findIndex((item) => item.id == id)
        todoList[index].completed = !todoList[index].completed
        mostrar()
    }
}



