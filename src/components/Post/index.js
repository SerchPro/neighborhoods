import React from 'react'
//import PropTypes from 'prop-types'
import './post.css'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { activePost } from '../../actions/posts';
import { useNavigate } from "react-router-dom";
import moment from 'moment';


const Post = (post) => {

  console.log("post: ", post)

  const { createdAt, description, category, images, _user, _id } = post

  const noteDate = moment(createdAt);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleEntryClick = () =>{
    dispatch(
      activePost( post)
  );
  navigate('/onepost');
  }

  return (
    <div className="post">
      <Link to={`/profile/${_user?.username}`} className='linka'>
        <img
            src={_user?.image_url}
            className="profile-post"
            alt="profile"
            />
      </Link>

      <div className="body">
        <div className="top">
            <span className="user">
                <Link to={`/profile/${_user?.username}`} className='linka'>
                  <span className="name">{_user?.name} </span>
                </Link>
                <span className="handle">@{_user?.username}</span>
            </span>
            <span className="timestamp">{  moment(noteDate).endOf('day').fromNow()}</span>
        </div>

        <div onClick={handleEntryClick}>
          <h3 className='title-post'>{post.title}</h3>
          <p className="message"> {description} </p>
          {
            images && images[0] &&
            (
              <div>
                <img className='img-post-fluid' src = {images[0]} alt="img"/>
              </div>
            )
          }
        </div>

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