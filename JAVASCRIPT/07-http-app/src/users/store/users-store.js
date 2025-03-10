import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async() => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if(users.length === 0) return; //si no existe un pagina, retorana arreglo vacio

    state.currentPage += 1;
    state.users = users;
}

const loadPreviousPage = async() => {
    if (state.currentPage ===1) return;
    const users = await loadUsersByPage(state.currentPage - 1);
    

    state.currentPage -= 1;
    state.users = users;

}

// TODO: implementar
const onUserChanged = () => {
    throw new Error('No implementado');



}



const reloadPage = async() => {
    throw new Error('No implementado');



}

export default{
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,


    /**
     * 
     * @returns {User[]}
     */
    getUsers: () => [...state.users], //operador SPREAD

    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage, //se pasa por valor (como todo primitivo). los objetos se pasan siempre por referencia
}