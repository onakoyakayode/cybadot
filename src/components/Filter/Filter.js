import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { filteredUser } from '../../features/user/userSlice';
import '../../Styles/Filter.css'

const Filter = () => {

    const inputRef = useRef();
    const dispatch = useDispatch();

    const filterUsers = () => {
        dispatch(filteredUser(inputRef.current.value))
    }
  return (
    <div className='filter-input'>
        <input
            type="text"
            name=""
            className='search-input'
            placeholder="Search user's by Job"
            ref={inputRef}
            onChange={filterUsers}
        />
    </div>
  )
}

export default Filter
