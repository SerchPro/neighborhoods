import React from 'react'
import { useSelector } from 'react-redux';
//import PropTypes from 'prop-types'
import Post from '../../components/Post';
import Titlescreen from '../../components/Titlescreen';

const OnePost = () => {

  const {active: post} = useSelector(state => state.posts)

  return (
    <div className=" backgroud-100vh">
      <Titlescreen title = {post.title}/>

      <div className='container one-post'>
        <div className='row'>
          <div className='col-12'>

          <Post {...post}/>

          </div>  {/* col */}
        </div> {/* row*/}
      </div>
      
    </div>


  )
}

//OnePost.propTypes = {}

export default OnePost