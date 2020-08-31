import axios from 'axios';

export const getItems = () => dispatch => {
    dispatch(setItemLoading());
    axios.get('/api/items')
        .then(response => {
            dispatch({
                type: 'GET_ITEMS',
                payload: response.data
            });
        })
        .catch(error => console.log(error));
}


export const addItem = item => dispatch => {
    axios.post('/api/items', item)
        .then(response => {
            dispatch({
                type: 'ADD_ITEM',
                payload: response.data
            });
        })
        .catch(error => console.log(error));
}

export const deleteItem = id => dispatch => {
    axios.delete(`/api/items/${id}`)
        .then(response => {
            dispatch({
                type: 'DELETE_ITEM',
                payload: id
            });
        })
        .catch(error => console.log(error))
}

export const setItemLoading = () => {
    return{
        type: 'SET_ITEM_LOADING'
    }
}