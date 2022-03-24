import React, { useEffect, useState } from 'react'
//import PropTypes from 'prop-types'
import Posts from '../../components/Posts'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { startLoadingNotes } from '../../actions/posts';
import { useForm } from '../../hooks/useForm';
import { startNewPost } from '../../actions/posts';
import Loader from '../Loader';
import SearchBar from '../../components/SearchBar';
//import EmptyView from '../../components/EmptyView'
import {useNavigate } from 'react-router-dom'


  const Feed = () => {

  const dispatch = useDispatch();

  const { posts }  = useSelector(state => state.posts);
  const { user } = useSelector(state => state.auth);
  const {addressactive } = user
  const navigate = useNavigate();


  if (!posts){
    <Loader/>
  }

  
  const [list, setList] = useState(posts);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const [ formValues, handleInputChange ] = useForm({
    description: '',
    colonia: addressactive?.neighborhood,
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
    formData.append('neighborhood', colonia);
    formData.append('userID', user._id);

    dispatch(startNewPost(formData))
  }

  useEffect(() => {
    dispatch(startLoadingNotes(addressactive?.neighborhood))
  }, [dispatch, addressactive?.neighborhood]);


  useEffect(() => {
    let updatedList = posts;
    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.description.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);


  }, [searchInput, posts]);

  return (

      <div className='container-fluid noPadding min-vh-100'>
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
                <div className='col-md-9 '>
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

            <div className='search-light d-md-none'>
                <h1 className='text-center linkMenuweb'>{addressactive?.neighborhood} </h1>
                <div className="form-group d-flex justify-content-center">
                    <input
                        id = "passwordlabel"
                        maxLength="100"
                        type="search"
                        value = {searchInput}
                        className="form-control btnwhiteSearching"
                        placeholder="Buscar en la loma"
                        name = "searchText"
                        autoComplete='off'
                        onChange={(e) => setSearchInput(e.target.value) }
                    />
                </div>
            </div>

            {resultsFound ? <Posts posts={list} /> : <Posts posts={posts} />}
          </div>

          <div className='d-none d-md-block col-md-5 noPadding d-flex justify-content-center container-search min-vh-100'>
            <SearchBar
              value={searchInput}
              neighborhood = {addressactive?.neighborhood}
              changeInput={(e) => setSearchInput(e.target.value)}
            />
          </div>

        </div>
      </div>
    
  )
}

//Feed.propTypes = {}

export default Feed