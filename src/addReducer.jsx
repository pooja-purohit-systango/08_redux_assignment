const add = {
    sucess : false
}

export const addReducer = (state = add, action) => {
    switch(action.type) {
        case 'ADD_USER_SUCCESS' :
             return {sucess : true}
             console.log(success)
        case 'ADD_USER_FAILURE' :
                return {sucess : false}
        default:
            return state; 
    }
} 