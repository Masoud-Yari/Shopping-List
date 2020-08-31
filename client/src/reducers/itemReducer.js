const initState = {
    items: [], 
    loading: false
};

const itemReducer = (state = initState, action) => {
    
    if(action.type === 'GET_ITEMS'){
        state = {
            ...state,
            items: action.payload,
            loading: false
        }
    }
    if(action.type === 'ADD_ITEM'){
        state = {
            ...state,
            items: [ ...state.items, action.payload ]
        };
    }
    if(action.type === 'DELETE_ITEM'){
        state = {
            ...state, 
            items: state.items.filter(item => item._id !== action.payload)
        }
    }
    if(action.type === 'SET_ITEM_LOADING'){
        state = {
            ...state,
            loading: !state.loading
        }
    }
    return state;
}

export default itemReducer;