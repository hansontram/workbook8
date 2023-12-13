let todoService
let id 

document.addEventListener("DOMContentLoaded", () => {
    todoService = new TodoService()
    
    const saveButton = document.getElementById("saveButton")
    saveButton.addEventListener("click", updateItem)

    const params = new URLSearchParams(location.search)
    if(params.has("id"))
    {
        id = params.get("id")
        loadItem(id)
    }
    else {
        alert("You must select an item to edit")
        location.href = "/index.html"
    }

})

async function loadItem (id) {
    let item = await todoService.getById(id)

    document.getElementById("itemId").value = item.id
    document.getElementById("categoryId").value = item.userId
    document.getElementById("categoryTitle").value = item.title
    document.getElementById("completed").value = item.completed
}

async function updateItem (event) {
    event.preventDefault()

    const id = document.getElementById("itemId").value
    const userId = document.getElementById("categoryId").value
    const title = document.getElementById("categoryTitle").value
    const completed = document.getElementById("completed").value

    // 2. create a JavaScript object - this will be the "body" of the request
    const item = {
        "id": id,
        "userId": userId,
        "title": title,
        "completed":completed
    }

    await todoService.update(item)

    location.href = "/index.html"
}