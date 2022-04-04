import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadReview } from '../../actions/review';
import Comment from '../Comment/Comment';
import CreateComment from '../CreateComment/createComment'
//import PropTypes from 'prop-types'

const Comments = ({idPost}) => {
  const dispatch = useDispatch();

  const {reviews} = useSelector(state => state.reviews)

  useEffect(() => {
    dispatch(startLoadReview(idPost))
  }, [idPost, dispatch])

  return (
    <div>
      <CreateComment idPost = {idPost}/>
      {
        reviews.map( review => (
            <Comment
              key={ review._id }
              {...review}/>
        ))
      }
    </div>
  )
}

//Comments.propTypes = {}

export default Comments