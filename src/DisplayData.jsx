import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './userActions'; 

const DisplayData = () => {
    const dispatch = useDispatch();

    const { loading, users, error } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <h2>-------------------------Posts list--------------------------</h2>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <ul>
                {users && users.map((user) => (
                    <div key={user.id}>
                        Title : {user.title} <br></br>
                        Body : {user.body}
                        <br></br>
                        <br></br>
                        </div>
                ))}
            </ul>
        </div>
    );
};

export default DisplayData;
