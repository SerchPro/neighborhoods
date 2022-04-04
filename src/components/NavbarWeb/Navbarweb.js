import React from 'react'
import { useSelector } from 'react-redux';
//import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import './style.css'

const Navbarweb = () => {
    const {user} = useSelector(state => state.auth)

  return (
    <div className='container  navweb-container'>
        <div className='row p-0 '>
            <div className='col-12 p-0 d-flex justify-content-center'>
                <ul className='ulFeed p-0'>
                    <Link className='linka linkMenuweb' to="/">
                        <li className='li-menu '>
                            <i className="fa-solid fa-house  imenu"></i> Inicio
                        </li>
                    </Link>
                    <Link className='linka linkMenuweb' to={`/profile/${user.username}`}>
                        <li className='li-menu '>
                            <i className="fa-solid fa-user imenu"></i> Perfil
                        </li>
                    </Link>
                    <Link className='linka linkMenuweb' to="/myaddress">
                        <li className='li-menu '>
                            <i className="fa-solid fa-location-dot imenu"></i> Mis direcciones
                        </li>
                    </Link>
                    <Link className='linka linkMenuweb' to="/emergencies">
                        <li className='li-menu '>
                            <i className="fa-solid fa-heart-pulse imenu"></i> Emergencias
                        </li>
                    </Link>
                </ul>

            </div>
            <div className='col-12 p-0 centerDiv'>
                <Link className='linka' to="/create-post">
                    <button type="submit" className="btn-green-nav" >
                        <i className="fa-solid fa-plus"></i>
                            Nueva publicacion
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

//Navbarweb.propTypes = {}

export default Navbarweb