export const TodoReducer = function (state, action) {
    const type = action.type
    if (type == "add-item") {
        const newTodoItem = {
            id: Date.now(),
            item: action.payload, // TODO 명
            isComplete: false
        }
        return {
            count : state.count + 1,
            todos: [...state.todos, newTodoItem],
            completeTodoCount: state
                                .todos
                                .filter ((item)=> item.isComplete)
                                .length

        } 
        
    }
    else if (type == "delete-item") {
        const item = { 
            count: state.count - 1,
            todos: state.todos.filter((todo)=> todo.id != action.payload)
            // state todos 에서 지우려는 애만 고름. 필터 사용
        }

        return {
            ...item,completeTodoCount: item.todos
                                        .filter((todo)=> todo.isComplete)
                                        .length
        }

    }
    else if (type == "complete") {
        const item = {
            count : state.count, 
            todos : state.todos.map((item)=> {
                if (item.id == action.payload) 
                    return {...item,isComplete: !item.isComplete};
                return item;
            })
        };
        return {...item, completeTodoCount: item.todos.filter
        ((todo)=> todo.isComplete).length}
         
    }else {return state}
 }