import React from 'react'
//import PropTypes from 'prop-types'
import { startAddFavorite, startRemoveFavorite } from '../../actions/posts';
import { useDispatch, useSelector } from 'react-redux';

const HeartLiked = ({_favorites, _id}) => {

    const {  user } = useSelector(state => state.auth)

    const liked = _favorites.includes(user._id)
    const dispatch = useDispatch();

    const like = () =>{
        dispatch(startAddFavorite(_id))
    }

    const dislike = () =>{
        dispatch(startRemoveFavorite(_id))
    }

    
    return (
        <div>
            { (liked)
                ?
                    <i onClick={dislike} className="far fa-heart heart-icon-post"></i>
                :
                    <i onClick={like} className="far fa-heart"></i>
            }

        </div>
    )
}

//HeartLiked.propTypes = {}

export default HeartLiked