import React from 'react'
import PropTypes from 'prop-types'
import Posts from '../../components/Posts'
import { useSelector } from 'react-redux';



const Feed = ({}) => {
  const { username, url_user } = useSelector(state => state.auth)
  return (
    <div>

      <div className='container postFeed'>
        <div className='row'>
          <div className='col-3 noPadding'>
            <div className='centerImg'>
                <p> Inicio </p>
                <img
                    src={url_user}
                    className="img-user-post"
                    alt="profile"
                    />
                <br/>
                <p > @{username} </p>
            </div>
          </div>
          <div className='col-6 noPadding'>
            <form>
              <input
                className='inputFeed'
                type= "text"
                
                placeholder='¿Qué está pasando en la loma?'
              />
              
            </form>
          </div>

          <div className='col-3 noPadding   d-flex justify-content-end  align-items-end'>
              <button type="button" className='btnBlueFeed'>  Publicar </button>
          </div>
          
        </div>
      </div>

      <Posts/>
    </div>
    
  )
}

Feed.propTypes = {}

export default Feed