import axios from 'axios'

const client = axios.create({
    baseURL: 'http://localhost:3001/todos'
})

export const getTodoList = async () => {
    const response = await client.get('?_sort=id&_order=desc')

    return response.data
}

export const createTodo = async (title) => {
    const response = await client.post('/', { title, done: false })

    return response.data
}

export const putTodo = async (todo, isActive = true) => {
    const response = await client.put(`/${todo.id}`, { ...todo, done: isActive })

    return response.data
}

export const deleteTodo = async (id) => {
    const response = await client.delete(`/${id}`)

    return response.data
}

export const searchTodo = async (title) => {
    const response = await client.get(`?q=${title}`)

    return response.data
}