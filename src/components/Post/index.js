import React from 'react'
//import PropTypes from 'prop-types'
import './post.css'
import { Link } from "react-router-dom";

const Post = ({createdAt, description,category, images, _user, _id}) => {

  return (
      <div className="post">
          <img
              src={_user?.image_url}
              className="profile-post"
              alt="profile"
              />
        <div className="body">

          <div className="top">
              <span className="user">
                  <Link to={`/profile/${_user?.username}`} className='linka'>
                    <span className="name">{_user?.name} </span> 
                  </Link>
                  <span className="handle">{_user?.username}</span>
              </span>
              <span className="timestamp">{createdAt}</span>
          </div>

          <Link className='linka' to={`/onepost/${_id}`}>
            <p className="message"> {description} </p>
            {
              images && images[0] &&
              (
                <div>
                  <img className='img-post-fluid' src = {images[0]} alt="img"/>
                </div>
              )
            }


            
          </Link>

          <div className="actions container">
            <div className='row d-flex justify-content-around'>
                <div className='col-4 d-flex justify-content-start align-items-center'>
                  <i className="far fa-comment icon-post"></i>
                </div>
                <div className='col-4 d-flex justify-content-start align-items-center'>
                  <i className="far fa-heart icon-post"></i>
                </div>
                <div className='col-4  d-flex justify-content-end align-items-center noPadding'>
                    <button type="submit" className="btn-green-contactar" > Contactar </button>
                </div>
            </div>
            
            
          </div>

        </div>

        <i className="fas fa-ellipsis-h"></i>
      </div>

  )
}

//Post.propTypes = {}

export default Post