import React from 'react'
import { useSelector } from 'react-redux';
//import PropTypes from 'prop-types'
import Post from '../../components/Post';
import Titlescreen from '../../components/Titlescreen';

const OnePost = () => {

  const {active: post} = useSelector(state => state.posts)

  return (
    <div className=" backgroud-100vh">
      

      <div className='container one-post noPadding no-margin'>
        <div className='row noPadding no-margin'>
          <div className='col-12 col-md-8 noPadding no-margin'>
            <Titlescreen title = {post.title}/>
            <Post {...post}/>
          </div>
          <div className='d-none d-md-block col-md-4'>

          </div>
        </div>
      </div>
      
    </div>


  )
}

//OnePost.propTypes = {}

export default OnePost