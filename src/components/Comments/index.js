import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadReview } from '../../actions/review';
import Comment from '../Comment';
import CreateComment from '../CreateComment'
//import PropTypes from 'prop-types'

const Comments = ({idPost}) => {
  console.log(idPost)
  const dispatch = useDispatch();

  const {reviews} = useSelector(state => state.reviews)


  //console.log(reviews)

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