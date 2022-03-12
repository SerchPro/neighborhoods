import React from 'react'
import PropTypes from 'prop-types'
import './post.css'
import { Link } from "react-router-dom";

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
          <Link className='linka' to="/onepost">
            <p className="message"> {message} </p>
          </Link>
          

          <div className="actions">
            {/* Font Awesome icons */}
            <i className="far fa-comment"></i>
            <i className="far fa-heart"></i>
          </div>
        </div>

        <i className="fas fa-ellipsis-h"></i>
      </div>

  )
}

Post.propTypes = {}

export default Post