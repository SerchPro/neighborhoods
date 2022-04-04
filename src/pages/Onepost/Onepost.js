import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { startLoadingNote } from '../../actions/posts';
import Comments from '../../components/Comments';
//import PropTypes from 'prop-types'
import Post from '../../components/Post';
import Titlescreen from '../../components/Titlescreen';
import Loader from '../Loader/Loader';

const OnePost = () => {
  const dispatch = useDispatch()
  const { id } = useParams();

  const {active: post} = useSelector(state => state.posts);

  if (!post){
    <Loader/>
  }

  useEffect(() => {
    dispatch(startLoadingNote(id))
  }, [dispatch, id]);

  return (
      <div className='container p-0 m-0 min-vh-100'>
        <div className='row p-0 m-0'>
          <div className='col-12 col-md-7 p-0 m-0'>
          {
            post && (
              <div>
              <Titlescreen title = {post?.title}/>
              <Post {...post}/>
              <Comments idPost = {post?._id}/>
              </div>

            )
          }
          </div>
          <div className='d-none d-md-block col-md-5 div-line min-vh-100'>

          </div>
        </div>
      </div>
  )
}

//OnePost.propTypes = {}

export default OnePost