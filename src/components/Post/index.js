import React from 'react'
import PropTypes from 'prop-types'
import './post.css'

const Post = ({ user, time, message}) => {
  return (
    <div className="post">
        <img
            src={user.image}
            className="profile-post"
            alt="profile"
            />
      <div className="body">
        <div className="top">
            <span className="user">
                <span className="name">{user.name} </span>
                <span className="handle">{user.handle}</span>
            </span>
            <span className="timestamp">{time}</span>
        </div>

        <p className="message"> {message} </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  )
}

Post.propTypes = {}

export default Post