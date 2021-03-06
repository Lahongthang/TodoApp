import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'

import { selectFilteredTodoIds, selectTodos } from './todosSlice'

const TodoList = () => {
    const todos = useSelector(selectTodos)
    console.log('todos: ', todos)

    const todoIds = useSelector(selectFilteredTodoIds)
    const loadingStatus = useSelector((state) => state.todos.status)

    const loader = (
        <div>
            <div className="loader" />
        </div>
    )
    
    const renderedListItems = todoIds.map((todoId) => {
        return <TodoListItem key={todoId} id={todoId} />
    })

    return (
        <>
            <ul className="todo-list">{renderedListItems}</ul>
            {loadingStatus === 'loading' && loader}
        </>
    )
}

export default TodoList
