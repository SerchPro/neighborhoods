import React from 'react'
//import PropTypes from 'prop-types'
//import { useSelector } from 'react-redux'
import Post from '../Post'



const Posts = ({posts}) => {

 //const { posts} = useSelector(state => state.posts)

 //const posts = [1,2,3]

 console.log(posts)

  return (
        <div>
            {
              posts.map( post => (
                    <Post 
                        key={ post._id }
                        { ...post }
                    />
                ))
            }

        </div>
  )
}

//Posts.propTypes = {}

export default Posts