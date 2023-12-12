class TodoService {
   baseUrl = "http://localhost:3000/todos"

    // GET
    async getAll() {
        return fetch(this.baseUrl).then(response => response.json())
    }

}