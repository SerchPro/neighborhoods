import React, { useEffect } from 'react'
//import PropTypes from 'prop-types'
import Posts from '../../components/Posts'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { startLoadingNotes } from '../../actions/posts';



  const Feed = () => {
  const dispatch = useDispatch();

  const { posts }  = useSelector(state => state.posts)

  useEffect(() => {
    dispatch(startLoadingNotes())
  }, [dispatch]);

  const { user } = useSelector(state => state.auth)
  return (
    <div>
      <p className='inicioFeed'> Inicio </p>
      
      <div className='container postFeed d-none d-md-block'>
        <div className='row'>

          <div className='d-none d-md-block col-md-3 noPadding'>
            <div className='centerDiv'>
                <Link
                  className='linka'
                  to={`/profile/${user.username}`}>
                <img
                    src={user.image_url}
                    className="img-user-post"
                    alt="profile"
                    />
                <br/>
                <p > @{user.username} </p>
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

      <Posts  posts =  { posts}/>
    </div>
    
  )
}

//Feed.propTypes = {}

export default Feed