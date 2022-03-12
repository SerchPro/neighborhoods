import React from 'react'
import PropTypes from 'prop-types'
import Posts from '../../components/Posts'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";



const Feed = () => {
  const { username, url_user } = useSelector(state => state.auth)
  return (
    <div>

      <div className='container postFeed d-none d-md-block'>
        <div className='row'>

          <div className='d-none d-md-block col-md-3 noPadding'>
            <div className='centerImg'>
                <p className='inicioFeed'> Inicio </p>
                <Link
                  className='linka'
                  to="/profile">
                <img
                    src={url_user}
                    className="img-user-post"
                    alt="profile"
                    />
                <br/>
                <p > @{username} </p>
                </Link>
            </div>
          </div>

          <div className='col-12 col-md-9 noPadding'>
            <form>
              <textarea
                className='inputFeed'
                type= "text"
                placeholder='¿Qué está pasando en la loma?'
              >
              </textarea>
              
            </form>
            <div className='d-flex justify-content-end'>
              <button type="button" className='btnBlueFeed'>  Publicar </button>
            </div>
            
          </div>

        </div>
      </div>

      <Posts/>
    </div>
    
  )
}

Feed.propTypes = {}

export default Feed