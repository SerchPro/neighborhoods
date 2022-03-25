import React from 'react'
//import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { startUpdateFollow, startUpdateUnfollow } from '../../actions/user';


const FollowUnfollow = ({follow, id}) => {

    const dispatch = useDispatch();
    const handleFollow = () =>{ dispatch(startUpdateFollow(id))}
    const handleUnFollow = () =>{
        const data = {"idUser": id}
        dispatch(startUpdateUnfollow(data))
    }

  return (
    <div>
    {
        (follow)
        ? <button type="button" className='btn-profile-follow' onClick={handleUnFollow}></button>
        : <button type="button" className='btn-profile-edit' onClick={handleFollow}>Seguir </button>
    }

    </div>

  )
}

//FollowUnfollow.propTypes = {}

export default FollowUnfollow