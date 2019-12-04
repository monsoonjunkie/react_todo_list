const initState = { todolist: [], formInput: null }

const todoListReducers = (state = initState, action) => {
    
    switch(action.type){
        case '[TODOLIST] LOAD_LIST':
            return {...state, todolist: action.payload}
        case '[TODOLIST] ADD_TODO': 
            let newList = [...state.todolist];
                if(!action.payload.id){
                    if(!newList.length){
                        let newId = 1;
                        let newTodoId = {...action.payload, id: newId}
                        newList.push(newTodoId);
                    }else{
                        let newId2 = newList[newList.length-1].id + 1
                        let newTodoId = {...action.payload, id: newId2}
                        newList.push(newTodoId);
                    }
                    
                }
            return {...state, todolist: newList};
        case '[TODOLIST] REMOVE_TODO':
            let updateList = [...state.todolist];
            for(let i = 0; i < updateList.length; i++){
                if(updateList[i].id === action.payload){
                    updateList.splice(i, 1);
                }
            }
            return {...state, todolist: updateList }
        default: 
        return state;
    }
        
}
export default todoListReducers;