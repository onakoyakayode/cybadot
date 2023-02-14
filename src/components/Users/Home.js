import React, { useState } from 'react'
import Filter from '../Filter/Filter'
import Users from './Users'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from '../actions/usersAction'
import Loader from '../Loader/Loader'
import { filteredAge, filteredBackendDeveloper } from '../../features/user/userSlice'

const Home = () => {
    const { users, isLoading } = useSelector((state) => state.users);
    const [isChecked, setIsChecked] = useState(false);
    const [isJob, setIsJob] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getUsers())
    }, [getUsers])

    const handleChecked = (event) => {
      setIsChecked(event.target.checked);
      dispatch(filteredAge( event.target.checked))
    }

    const handleJob = (e) => {
      setIsJob(e.target.checked);
      dispatch(filteredBackendDeveloper( e.target.checked))
    }

  return !isLoading ? 
    <div className='user-display'>
        <h1>User's List</h1>
        <div className='filter-search'>
          <Filter />
        </div>
        <div className='home'>
            <div className='home-filters'>
              <p>Filter Users: </p>
              <label>
                <input type="checkbox" name='' onChange={handleChecked} checked={isChecked} />
                <h5>Age: 22 - 25</h5>
              </label>
              <label>
                <input type='checkbox' name='' onChange={handleJob} checked={isJob} />
                <h5>Backend Developer</h5>
              </label>
            </div>
            <div className='user-display-data'>
            {users.map((user) => <Users key={user.id} {...user} />)}
        </div>
        </div>
        
        
    </div> :
    <Loader />
  
}

export default Home;
