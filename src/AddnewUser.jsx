import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './userActions';

const AddnewUser = () => {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');


    const dispatch = useDispatch();

    function handleAddUser() {
        dispatch(addUser(name, email))
    }

  return (
    <div>
        <p>Add new user : </p>
        <form>
            <label>Name: </label>
            <input type='text' onChange={(e) => setname(e.target.value)}></input>

            <label>Email: </label>
            <input type='email' onChange={(e) => setemail(e.target.value)}></input>


            {console.log('new name : ', name)}
            {console.log('new email : ', email)}

            <button onClick={handleAddUser}>Add</button>

        </form>


    </div>
  )
}

export default AddnewUser