import { Todo } from '../todos/models/todo.model';

export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra de la realidad'),


    ],

    filter: Filters.All,
}

const initStore = () => {
    loadStore();
    console.log('Init Store');
}

const loadStore = () => {
    if(!localStorage.getItem('state')){
        return;
    }

    const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
}

const saveToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}


const getTodos = (filter = Filters.All) => {
    switch(filter) {
        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter(todo => todo.done );

        case Filters.Completed:
            return state.todos.filter(todo => !todo.done );

        default:
            throw new Error(`Option ${filter} not valid.`);
        
    }
}



/**
 * 
 * @param {String} description 
 */

const addTodo = (description) => {
    if(!description){
        throw new Error('Description is required');
    }
    state.todos.push(new Todo(description));

    saveToLocalStorage();
}

const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if(todo.id === todoId){
            todo.done = !todo.done;
        }
        return todo;
    });

    saveToLocalStorage();

}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);

    saveToLocalStorage();

}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done );

    saveToLocalStorage();

}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;    

    saveToLocalStorage();

}

const getCurrentFilter = () => {
    return state.filter;


}


export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}