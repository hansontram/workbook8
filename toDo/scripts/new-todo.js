let todoService

document.addEventListener("DOMContentLoaded", () => {
    todoService = new TodoService()

    const addButton = document.getElementById("saveButton")
    addButton.addEventListener("click", addNewItem)
})

async function addNewItem (event){
    event.preventDefault()
    console.log(event)

        // save the category to the API
    // 1. build a category object
    const title = document.getElementById("categoryTitle").value
    const completed = document.getElementById("completed").value

    // 2. create a JavaScript object - this will be the "body" of the request
    const item = {
        "title": title,
        "completed": completed
    }

    console.log(item);
    const newItem = await todoService.add(item)
    console.log(item);
    
    // go back to the home page
    location.href = "/index.html"
}