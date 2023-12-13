let todoService


document.addEventListener("DOMContentLoaded", () => {
    todoService = new TodoService()

    loadToDoItems()
})

function loadToDoItems() {
    todoService.getAll()
                .then(items => {
                    displayRows(items)
                })
}

function displayRows(items) {
    document.getElementById("itemRows").innerHTML = ""

    items.forEach(item => {
        displayRow(item)
    });
}

function displayRow(items) {
    const itemRows = document.getElementById("itemRows")

    const row = itemRows.insertRow(-1)
    const idCell = row.insertCell(0)
    idCell.innerText = items.id
    const nameCell = row.insertCell(1)
    nameCell.innerText = items.title
    const detailsCell = row.insertCell(2)
    detailsCell.innerText = items.completed
    const editCell = row.insertCell(3)
    const editButton = document.createElement("button")
    editButton.classList.add("btn")
    editButton.classList.add("btn-success")
    editButton.classList.add("m-1")
    editButton.innerText = "Edit"
    editCell.appendChild(editButton)
    
    const deleteButton = document.createElement("button")
    deleteButton.classList.add("btn")
    deleteButton.classList.add("btn-danger")
    deleteButton.classList.add("m-1")
    deleteButton.innerText = "Delete"
    editCell.appendChild(deleteButton)


    deleteButton.addEventListener("click", () => {
    
       const isDeleteConfirmed = confirm(`Are you sure you want to delete "${items.title}" ?`)
       if(isDeleteConfirmed)
       {
           todoService.delete(items.id)
               .then(() => {
                   // delete the row
                   itemRows.removeChild(row)
               })
       }
    })
    
    editButton.addEventListener("click", () => {
        location.href = `../edit-todo.html?id=${items.id}`
       
    })
}
 // delete and edit functions


function addNewClick() {
    location.href = "/new-todo.html"
}
