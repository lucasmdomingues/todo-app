import React, { useEffect, useState } from 'react'
import { deleteTodo, getTodoList, putTodo, createTodo, searchTodo } from "../../services/jsonPlaceholderAPI/todo";

import './index.css'
import { Button, Col, Form, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus, faSearch, faTimes, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons';

import Content from '../../components/Content'
import Condition from '../../components/Condition';

export default props => {
    const [list, setList] = useState([])
    const [title, setTitle] = useState('')

    const fetchData = async () => {
        const data = await getTodoList()
        setList(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleCreate = async () => {
        if (title === '') {
            alert('Digite um título para tarefa')
            return
        }

        await createTodo(title)
        handleClear()
    }

    const handleUpdate = async (todo, isActive = true) => {
        await putTodo(todo, isActive)

        if (title) {
            const data = await searchTodo(title)
            setList(data)
        } else {
            fetchData()
        }
    }

    const handleRemove = async (id) => {
        await deleteTodo(id)
        handleClear()
    }

    const handleSearch = async () => {
        const data = await searchTodo(title)
        setList(data)
    }

    const handleClear = () => {
        setTitle('')
        fetchData()
    }

    const handleKeyPress = (e) => {
        switch (e.key) {
            case "Enter":
                e.ctrlKey ? handleSearch() : handleCreate()
                break
            case "Escape":
                handleClear()
                break
            default:
                return
        }
    }

    return (
        <Content title="Ínicio" subtitle="Listagem de tarefas">
            <Form>
                <Form.Row>
                    <Col md={10}>
                        <Form.Control
                            placeholder="Buscar tarefa por nome..."
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            onKeyPress={e => handleKeyPress(e)}
                        />
                    </Col>
                    <Col md={2} className="text-center">
                        <Button
                            variant="primary"
                            onClick={() => handleCreate()}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                        <Button
                            variant="info"
                            className="ml-2"
                            onClick={() => handleSearch()}
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </Button>
                        <Button
                            variant="dark"
                            className="ml-2"
                            onClick={() => handleClear()}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
            <Table striped hover className="mt-3">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((todo) => (
                        <tr key={todo.id}>
                            <td className={todo.done ? 'text-strike' : ''}>{todo.title}</td>
                            <td>
                                <Condition test={!todo.done}>
                                    <Button
                                        variant="success"
                                        size="sm"
                                        onClick={() => handleUpdate(todo)}
                                    >
                                        <FontAwesomeIcon icon={faCheck} />
                                    </Button>
                                </Condition>
                                <Condition test={todo.done}>
                                    <Button
                                        variant="warning"
                                        size="sm"
                                        onClick={() => handleUpdate(todo, false)}
                                    >
                                        <FontAwesomeIcon icon={faUndo} />
                                    </Button>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        className="ml-2"
                                        onClick={() => handleRemove(todo.id)}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </Condition>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Content>
    )
}
