import React, { useEffect, useState } from 'react'
//import PropTypes from 'prop-types'
import './post.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import moment from 'moment';
import HeartLiked from '../HeartLiked';
/*
import {
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";*/


const Post = (post) => {
  const [nreviews , setNreviews] = useState(0);
  //const shareUrl = 'https://www.google.com/'

  const { createdAt, description, images, _user, _id , _favorites, _reviews} = post;

  useEffect(() => {
    setNreviews(_reviews.length);
  }, [_reviews.length])
  

  const noteDate = moment(createdAt);

  const navigate = useNavigate();

  const handleEntryClick = () =>{
    navigate(`/onepost/${_id}`);
  }



  return (
    <>

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
                    <span className="handle">@{_user?.username}</span>
                  </Link>
              </span>
              <span className="timestamp">{  moment(noteDate).endOf('day').fromNow()}</span>
          </div>

          <div onClick={handleEntryClick} className="body">
            <p className='title-post'>{post.title}</p>
            <p className="message pt-0 m-0"> {description} </p>
            {
              images && images[0] &&
              (
                <div>
                  <img className='img-post-fluid mt-1' src = {images[0]} alt="img"/>
                </div>
              )
            }
          </div>

          <div className="container actions">
            <div className='row d-flex align-items-center justify-content-start'>

              <div className='col-3'>
                <p className='p-0  m-0'>
                  <span> <i onClick={handleEntryClick} className="far fa-comment icon-post"> </i>
                  </span> {nreviews}
                </p>
              </div>

              <div className='col-3'>
                  <HeartLiked _favorites = {_favorites}  _id = {_id}/>
              </div>

              {/* <div className='col-2'>
                <FacebookShareButton
                      url={shareUrl}
                      quote={`Hola, checa esta publicación "${description}"`}
                    >
                      <FacebookIcon size={20} round={true}/>
                </FacebookShareButton>
              </div>

              <div className='col-2'>
                <TwitterShareButton
                  url={shareUrl}
                  title={`Hola, checa esta publicación "${description}" `}
                >
                  <TwitterIcon size={20} round={true}/>
                </TwitterShareButton>
              </div>

              <div className='col-2'> 
                <WhatsappShareButton
                  url={shareUrl}
                  title={`Hola, checa esta publicación"${description}"`}
                >
                  <WhatsappIcon size={20} round={true} m={1}  />
                </WhatsappShareButton> 
              </div>*/}
            </div>
          </div>
        </div>
      </div>
      
    </>

  )
}

//Post.propTypes = {}

export default Post