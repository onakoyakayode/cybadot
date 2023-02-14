import React from 'react'
import '../../Styles/Users.css'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../features/user/userSlice';

const Users = ({id, name, age, job, country, hobby}) => {

    const dispatch = useDispatch();

  return (
    <div key={id}>
        <div className='user-card'>
            <div className='user-card-bg'></div>
            <div className='user-card-profile'>
                <h2 className='user-name'>{name}</h2>
                <h6 className='user-job'>{job}</h6>
                <h5 className='user-age'>Age: {age}</h5>
                <h5 className='user-country'>Country: {country}</h5>
                <p className='user-hobby'>Hobby: {hobby}</p>
                <div className='rmv'>
                    <button 
                        onClick={() => dispatch(removeItem(id))}
                    className='rmv-btn'>Remove</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Users
