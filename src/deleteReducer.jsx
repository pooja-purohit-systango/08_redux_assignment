const initialdeleteState = {
    loading: false,
    user: [],
    error: ''
};
export const deleteReducer = (state = initialdeleteState, action) => {
    switch (action.type) {
        case 'DELETE_USER_REQUEST':
            return { ...state, loading: true };
        case 'DELETE_USER_SUCCESS':
            return { loading: false, user: action.payload, error: '' };
        case 'DELE6E_USER_ERROR':
            return { loading: false, user: [], error: action.payload };
        default:
            return state; 
    }
};