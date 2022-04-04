import React from 'react'
//import PropTypes from 'prop-types'
import Post from '../Post/Post'



const Posts = ({posts = []}) => {

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