class TodoService {
  baseUrl = "http://localhost:3000/todos";

  // GET
  async getAll() {
    return fetch(this.baseUrl).then((response) => response.json());
  }

  // GET
  async getById(id) {
    let url = `${this.baseUrl}/${id}`;
    return fetch(url).then((response) => response.json());
  }

  // POST
  async add(items) {
    // create a requestInfo object
    const requestInfo = {
      method: "POST",
      body: JSON.stringify(items),
      headers: { "Content-type": "application/json;charset=UTF-8" },
    };

    return fetch(this.baseUrl, requestInfo).then((response) => response.json());
  }
  // PUT
  async update(items) {
    let url = `${this.baseUrl}/${items.id}`;

    const requestInfo = {
      method: "PUT",
      body: JSON.stringify(items),
      headers: { "Content-type": "application/json;charset=UTF-8" },
    };

    return fetch(url, requestInfo).then((response) => response.json());
  }
  
  // Delete
  async delete(id) {
    let url = `${this.baseUrl}/${id}`;
    const requestInfo = {
      method: "DELETE",
    };

    return fetch(url, requestInfo);
  }
}
