

export const todoReducer = (state ={todos:[]}, action)=> {
    switch(action.type){
        case "TODO_LIST":
            return action.payload
        default: 
            return state;    
    }
}

export const todoDetailsReducer = (state = {todo: {}}, action)=> {
    switch(action.type){
        case "SINGLE_TODO":
            return action.payload
        default: 
            return state;    
    }
    
}