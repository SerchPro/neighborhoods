import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


const Profile = props => {

const { username, url_user } = useSelector(state => state.auth)

  console.log(url_user)
  return (
    <div className='container form-Profile'>
        <div className='row '>
          <div className='col-12'>
            <div className='noPadding centerImg'>
              <Link to="/edit-profile">
                  <img
                      src={url_user}
                      className="edit-profile-img"
                      alt="profile"
                      />
                  <br/>
                  <p > @{username} </p>
                </Link>
            </div>
            <div className=' noPadding centerImg'>
                <button type="button" className='btnwhite'> Mis publicaciones </button>
                <button type="button" className='btnwhite '> <i class="fa-solid fa-heart"></i>  Favoritos </button>
            </div>
          </div>
        </div>

        
    </div>
  )
}

Profile.propTypes = {}

export default Profile