import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const OnePost = () => {

  const user =  {
        name: "Thoughts of Dog®",
        image: "https://i.imgur.com/b0EdHVV.jpg",
        handle: "dog_feelings",
      }
      const time = "1h ago"
      const message = "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company"
      
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
            <i className="fas fa-retweet"></i>
            <i className="far fa-heart"></i>
            <i className="fas fa-share"></i>
          </div>
        </div>

        <i className="fas fa-ellipsis-h"></i>
      </div>

  )
}

OnePost.propTypes = {}

export default OnePost