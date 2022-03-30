import React, { useEffect, useState } from 'react'
//import PropTypes from 'prop-types'
import { startAddFavorite, startRemoveFavorite } from '../../actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import './style.css'
const HeartLiked = ({_favorites, _id}) => {
    const [nliked , setNliked] = useState(0);
    const {  user } = useSelector(state => state.auth)
    const navigate = useNavigate();

    useEffect(() => {
        setNliked(_favorites.length);
    }, [_favorites.length])

    let liked = false
    if ( user ){
        liked = _favorites.includes(user._id)
    }
    const dispatch = useDispatch();
    const like = () =>{
        dispatch(startAddFavorite(_id))
    }
    const dislike = () =>{
        dispatch(startRemoveFavorite(_id))
    }
    const handleLogin = () =>{
        navigate(`/login`);
    }
    return (
        <div>
            { (user)
                ?
                    (liked)
                        ?
                        <p  className='p-0 m-0'> <span> <i onClick={dislike} className="far fa-heart heart-icon-post"> </i> </span> {nliked}</p>
                        :
                        <p className='p-0  m-0'> <span> <i onClick={like} className="far fa-heart icon-post"> </i> </span> {nliked}</p>
                :
                    <p className='p-0  m-0'> <span> <i onClick={handleLogin} className="far fa-heart icon-post"> </i> </span> {nliked}</p>
            }

        </div>
    )
}

//HeartLiked.propTypes = {}

export default HeartLiked