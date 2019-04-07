import { createStore } from 'redux';


export const ToDoListReducer = (state = {list : [] , currentToDo : ""}, action) => {
    switch (action.type) {
        case "Add_LIST":
            return { ...state, list: [...state.list, action.list] }
        // case  "Delete_LIST":
        // return {...state, list:[...state,action.list] }
        default: return state
    }
}




const store = createStore(ToDoListReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

export default store;