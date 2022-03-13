import React from 'react'
import PropTypes from 'prop-types'
import './post.css'
import { Link } from "react-router-dom";

const Post = ({ user, time, message, image}) => {
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
          

          <div>
            <img className='img-post-fluid' src = {image} alt="img"/>
          </div>

          </Link>

          <div className="actions container">
            <div className='row'>
                <div className='col-2 d-flex justify-content-start align-items-center'>
                  <i className="far fa-comment"></i>
                </div>
                <div className='col-2 d-flex justify-content-start align-items-center'>
                  <i className="far fa-heart"></i>
                </div>
                <div className='col-8  d-flex justify-content-end align-items-center noPadding'>
                    <button type="submit" className="btn-green-contactar" > Contactar </button>
                </div>
            </div>
            
            
          </div>

        </div>

        <i className="fas fa-ellipsis-h"></i>
      </div>

  )
}

Post.propTypes = {}

export default Post