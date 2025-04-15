import axios from 'axios';

export const FetchUserRequest = () => ({
    type: 'FETCH_USER_REQUEST'
});

export const FetchUserSuccess = (users) => ({
    type: 'FETCH_USER_SUCCESS',
    payload: users
});

export const FetchUserFailure = (error) => ({
    type: 'FETCH_USER_ERROR',
    payload: error
});

export const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(FetchUserRequest());
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(response.data)
            dispatch(FetchUserSuccess(response.data));
        } catch (error) {
            dispatch(FetchUserFailure(error.message)); 
        }
    };
};

export const AddUserSuccess = () => ({
    type: 'ADD_USER_SUCCESS'
});
export const AddUserFailure = () => ({
    type: 'ADD_USER_FAILURE'
});



export const addUser = (name, email) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
                name,
                email
            });
            console.log('User added:', response.data);
            dispatch(AddUserSuccess());

        } catch (error) {
            console.error('error occured in adding a new user:', error.message);
            dispatch(AddUserFailure());
            console.log(success)
            throw error;
        }
    };
};

export const DeleteUserRequest = () => ({
    type: 'DELETE_USER_REQUEST'
});

export const DeleteUserSuccess = (users) => ({
    type: 'DELETE_USER_SUCCESS',
    payload: users
});

export const DeleteUserFailure = (error) => ({
    type: 'DELETE_USER_ERROR',
    payload: error
});

export const DeleteUser = (id) => {
    return async (dispatch) => {
        dispatch(DeleteUserRequest ());
        try {
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            console.log(response.data)
            dispatch(DeleteUserSuccess(response.data));

            console.log("user deleted successfully")
        } catch (error) {
            dispatch(DeleteUserFailure(error.message)); 
        }
    };
};


export const searchedNames = (searchName) => ({
   type : SEARCH_NAME, 
   payload: searchName
})
