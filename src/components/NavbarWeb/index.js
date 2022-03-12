import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const NavbarWeb = () => {
  return (

    <div className='container '>
        <div className='row noPadding'>
            <div className='col-12 noPadding'>
                <ul className='ulFeed'>
                    <li>
                        <Link className='linka' to="/">
                        <i className="fa-solid fa-house"></i> Inicio
                        </Link>
                    </li>
                    <li>
                        <Link className='linka' to="/profile">
                        <i class="fa-solid fa-user"></i> Perfil
                        </Link>
                    </li>
                    <li>
                        <Link className='linka' to="/emergencies">
                        <i class="fa-solid fa-heart-pulse"></i> Emergencias
                        </Link>
                    </li>
                </ul>
                
            </div>
            <div className='col-12 noPadding'>
            <button type="submit" className="btnGreen" > + Nueva publicacion </button>
            </div>
        </div>
    </div>
  )
}

NavbarWeb.propTypes = {}

export default NavbarWeb