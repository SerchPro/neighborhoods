import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


const Profile = props => {

  const { username } = useSelector(state => state.auth)
  return (
    <div className='container-profile'>
        
        <img/>
        <p> @{username} </p> <span>   <Link to="/edit-profile">editar perfil </Link> </span>
        <button type="button" className='btnwhite'> Mis publicaciones </button>
        <button type="button" className='btnwhite'> Favoritos </button>
    </div>
  )
}

Profile.propTypes = {}

export default Profile