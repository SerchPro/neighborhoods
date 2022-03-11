import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import MyPosts from '../../components/Myposts';


const Profile = props => {

const { username, url_user } = useSelector(state => state.auth)

  console.log(url_user)
  return (
    <div>
      <div className='container form-Profile'>
          <div className='row '>
            <div className='col-12 col-md-4'>
              <div className='noPadding centerImg'>
                <Link to="/edit-profile">
                    <img
                        src={url_user}
                        className="profile-img"
                        alt="profile"
                        />
                    <br/>
                  </Link>
                  <p className='text120'> @{username} </p>
              </div>
              <br/>
            </div>

            <div className='leftDiv col-12 col-md-5'>
              <p className='text180'> Sergio Sandoval</p>
              <div className='d-flex justify-content-start'>
                <p className='text120'> 100 Sigiendo</p>
                <p className='text120'> 100 Seguidores</p>
              </div>
            </div>

            <div className='d-none d-md-block col-md-3'>
              <button type="button" className='btnwhite'>
                <Link
                  className='linka'
                  to="/edit-profile"
                >
                  Editar perfil
                </Link>
              </button>
            </div>
          </div>


          <div className='row noPadding'>
            <div className='col-12 col-md-6 '>
              <button type="button" className='btnwhite'> Mis publicaciones </button>
            </div>
            <div className='col-12 col-md-6 '>
              <button type="button" className='btnwhite '> <i class="fa-solid fa-heart"></i>  Favoritos </button>
            </div>
          </div>

      </div>

      <MyPosts/>
    </div>

  )
}

Profile.propTypes = {}

export default Profile