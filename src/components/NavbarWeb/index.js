import React from 'react'
import { useSelector } from 'react-redux';
//import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const NavbarWeb = () => {
    const {user} = useSelector(state => state.auth)

  return (
    <div className='container  navweb-container'>
        <div className='row noPadding'>
            <div className='col-12 noPadding'>
                <ul className='ulFeed navweb'>
                    <li className='li-menu'>
                        <Link className='linka linkMenuweb' to="/">
                        <i className="fa-solid fa-house  imenu"></i> Inicio
                        </Link>
                    </li>
                    <li className='li-menu'>
                        <Link className='linka linkMenuweb' to={`/profile/${user.username}`}>
                        <i className="fa-solid fa-user imenu"></i> Perfil
                        </Link>
                    </li>
                    <li className='li-menu'>
                        <Link className='linka linkMenuweb' to="/emergencies">
                        <i className="fa-solid fa-heart-pulse imenu"></i> Emergencias
                        </Link>
                    </li>
                </ul>
                
            </div>
            <div className='col-12 noPadding'>
                <Link className='linka' to="/create-post">
                <button type="submit" className="btn-green-nav" > + Nueva publicacion </button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

//NavbarWeb.propTypes = {}

export default NavbarWeb