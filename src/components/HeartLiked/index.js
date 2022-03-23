import React from 'react'
//import PropTypes from 'prop-types'
import { startAddFavorite, startRemoveFavorite } from '../../actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const HeartLiked = ({_favorites, _id}) => {

    const {  user } = useSelector(state => state.auth)
    const navigate = useNavigate();
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
                            <i onClick={dislike} className="far fa-heart heart-icon-post"></i> //red
                        :
                            <i onClick={like} className="far fa-heart icon-post"></i>
                :
                    <i onClick={handleLogin} className="far fa-heart icon-post"></i>
            }

        </div>
    )
}

//HeartLiked.propTypes = {}

export default HeartLiked