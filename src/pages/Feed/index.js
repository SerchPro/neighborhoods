import React from 'react'
//import PropTypes from 'prop-types'
import Posts from '../../components/Posts'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";



const Feed = () => {
  const { username, image_url } = useSelector(state => state.user)
  return (
    <div>
      <p className='inicioFeed'> Inicio </p>
      
      <div className='container postFeed d-none d-md-block'>
        <div className='row'>

          <div className='d-none d-md-block col-md-3 noPadding'>
            <div className='centerImg'>
                <Link
                  className='linka'
                  to="/profile">
                <img
                    src={image_url}
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

              <div className='div-add-image'>
                  <label htmlFor="fileImg"> <i className="fa-solid fa-image  image-upload"> </i> Agregar imagen</label>
                  <input type="file" name ="archivo" id="fileImg" accept=".jpg, .jpeg, .png"/>
                </div>
              
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

//Feed.propTypes = {}

export default Feed