import React, { useEffect } from 'react'
//import PropTypes from 'prop-types'
import Posts from '../../components/Posts'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { startLoadingNotes } from '../../actions/posts';
import { useForm } from '../../hooks/useForm';
import { startNewPost } from '../../actions/posts';
import Loader from '../Loader';
import Search from '../Search';



  const Feed = () => {
  const dispatch = useDispatch();

  const { posts }  = useSelector(state => state.posts)
  const { user } = useSelector(state => state.auth);

  if (!posts){
    <Loader/>
}

  const [ formValues, handleInputChange ] = useForm({
    description: '',
    colonia: 'la loma',
  });

  const {  description, colonia } = formValues;

  let file = '';
  const handleFileChange = (e) =>{
    file = e.target.files[0];
  }

  const handlePost = (e) =>{
    e.preventDefault();
    const formData = new FormData();

    if(file) formData.append('archivo', file );
    formData.append('description', description);
    formData.append('colonia', colonia);
    formData.append('userID', user._id);

    dispatch(startNewPost(formData))
  }

  useEffect(() => {
    dispatch(startLoadingNotes())
  }, [dispatch]);

  
  return (

      <div className='container-fluid noPadding'>
        <div className='row  noPadding no-margin'>

          <div className='col-12 col-md-7 noPadding'>
            <p className='inicioFeed'> Inicio </p>
            <div className='container-fluid noPadding d-none d-md-block postFeed'>
              <div className='row noPadding d-flex justify-content-center'>

                <div className=' col-md-3 noPadding'>
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
                  <form onSubmit={ handlePost }>
                    <textarea
                      className='inputFeed'
                      type= "text"
                      placeholder='¿Qué está pasando en la loma?'
                      onChange = {handleInputChange}
                      value = {description}
                      name = "description"
                    >
                    </textarea>
                    <div className='div-add-image'>
                        <label htmlFor="fileImg"> <i className="fa-solid fa-image  image-upload"> </i> Agregar imagen</label>
                        <input
                          type="file"
                          name ="archivo"
                          id="fileImg"
                          accept=".jpg, .jpeg, .png"
                          onChange = {handleFileChange}
                          />
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button type="submit" className='btnBlueFeed'>  Publicar </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <Posts  posts =  { posts}/>
          </div>

          <div className='d-none d-md-block col-md-5 noPadding d-flex justify-content-center'>
            <Search/>
          </div>

        </div>
      </div>
    
  )
}

//Feed.propTypes = {}

export default Feed