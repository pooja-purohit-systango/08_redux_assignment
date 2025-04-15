export const FetchUserRequest = () => ({
    type : 'FETCH_USER_REQUEST'
})


export const FetchUserSucsess = (users) => ({
    type : 'FETCH_USER_SUCCESS', 
    payload : users
})

export const FetchUserErrors = (error) => ({
    type : 'FETCH_USER_ERROR', 
    payload: errors
})


export const fetchUsers = () => {
    return async(dispatch) => {
        dispatch(FetchUserRequest());
        try {
            const response = axios.get('https://jsonplaceholder.typicode.com/posts');
            dispatch(FetchUserSucsess(response.data)); 
        }
        catch(error) {
            dispatch(FetchUserErrors(error));

        }
    }
}
