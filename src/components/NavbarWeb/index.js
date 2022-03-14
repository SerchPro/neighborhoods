import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const NavbarWeb = () => {
  return (

    <div className='container  navweb-container'>
        <div className='row noPadding'>
            <div className='col-12 noPadding'>
                <ul className='ulFeed navweb'>
                    <li>
                        <Link className='linka linkMenuweb' to="/">
                        <i className="fa-solid fa-house  imenu"></i> Inicio
                        </Link>
                    </li>
                    <li>
                        <Link className='linka linkMenuweb' to="/profile">
                        <i class="fa-solid fa-user imenu"></i> Perfil
                        </Link>
                    </li>
                    <li>
                        <Link className='linka linkMenuweb' to="/emergencies">
                        <i class="fa-solid fa-heart-pulse imenu"></i> Emergencias
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

NavbarWeb.propTypes = {}

export default NavbarWeb