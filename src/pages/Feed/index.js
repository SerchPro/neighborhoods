import React from 'react'
import PropTypes from 'prop-types'
import Posts from '../../components/Posts'



const Feed = props => {
  return (
    <div>
      <h1> feed</h1>
          <hr/>
          <Posts/>
    </div>
    
  )
}

Feed.propTypes = {}

export default Feed