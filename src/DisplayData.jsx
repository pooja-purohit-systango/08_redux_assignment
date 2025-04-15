import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteUser, fetchUsers } from './userActions';
import { useState } from 'react';

const DisplayData = () => {
    const dispatch = useDispatch();

    const { loading, users, error } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);


    function handleDeleteUser(id) {
        dispatch(DeleteUser(id));
    }

    const [searchName, setsearchName] = useState('');


   useEffect(() => {
    dispatch(searchedNames(searchName))
   }, [])


    return (
        <div>
            <h2>------------------------  Users List  ------------------------</h2>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>} 

            <label>Search User by name : </label>

            <input
                type="text"
                value={searchName}
                onChange={(e) => setsearchName(e.target.value)}
            />

            { searchName ?    <ul>
                {searchedNames.map((user) => (
                    <div key={user.id}>{user.name}
                     <button onClick={() => handleDeleteUser(user.id)}>DELETE</button>
                        <br />
                        <br />
                    </div>
                ))}

            </ul> :   <ul>
                {users && users.map((user) => (
                    <div key={user.id}>
                        {user.name}
                        <button onClick={() => handleDeleteUser(user.id)}>DELETE</button>
                        <br />
                        <br />
                    </div>
                ))}
            </ul>}





        </div>
    );
};

export default DisplayData;
