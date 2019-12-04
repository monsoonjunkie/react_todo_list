export const loadTodoList = list => ({
    type:   '[TODOLIST] LOAD_LIST',
    payload: list
})

export const addTodo = todo => ({
    type:   '[TODOLIST] ADD_TODO',
    payload: todo
})

export const removeTodo = id =>({
    type: '[TODOLIST] REMOVE_TODO',
    payload: id
})



