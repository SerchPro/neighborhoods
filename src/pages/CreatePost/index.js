import React, { useEffect } from 'react'
//import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm';
import Titlescreen from '../../components/Titlescreen';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingCategory } from '../../actions/category';
import { Navigate } from 'react-router-dom';
import { startUserPost } from '../../actions/user';


const CreatePost = () => {

  const dispatch = useDispatch()

  const {uid} = useSelector(state => state.auth);
  const {categories, number} = useSelector(state => state.category);
  //console.log(categories, number)
  //console.log(typeof(categories))

  useEffect(() => {
    dispatch(startLoadingCategory())
  }, [dispatch])
  
  
  const [ formValues, handleInputChange ] = useForm({
    title: '',
    description: '',
    colonia: 'la loma',
    idCategory: '',
  });

  const { title, description, colonia, idCategory } = formValues;
  if (!categories){
    return <Navigate to='/' />
}
  let file = '';
  const handleFileChange = (e) =>{
    file = e.target.files[0];
    console.log(file)
  }

  const handlePost = (e) =>{
    e.preventDefault();
    const formData = new FormData();

    if(file) formData.append('archivo', file );
    formData.append('title', title);
    formData.append('description', description);
    formData.append('colonia', colonia);
    formData.append('userID', uid);
    formData.append('idCategory', idCategory);
    console.log( title, description, colonia, idCategory, uid)
    console.log(formData)

    dispatch(startUserPost(formData))
    
  }

  const options = categories || [];

  return (
    <div className='backgroud-100vh'>
        <Titlescreen title = {"Crear publicación"}/>

        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='col-12 col-md-9'>

              <form onSubmit={ handlePost }>
                <select 
                        className="form-select form-select-lg select-category" 
                        aria-label=".form-select-sm example" 
                        name = "idCategory"
                        value = {idCategory}
                        onChange={ handleInputChange}>
                        <option >Elige una categoría</option>
                        {options.map((option,index)=> <option key={index} value={option._id}>{option.name}</option>)}
                </select>


                <div className="form-group">
                  <label className="form-label " style={{"fontSize": "15px", }}> Title </label>
                  <input
                      id = "passwordlabel"
                      type="text"
                      value = {title}
                      className="form-control form-input-white-rect"
                      placeholder="titulo"
                      name = "title"
                      onChange={ handleInputChange}
                      required
                  />
                </div>


                <div className="form-group">
                  <label htmlFor='description'  style={{"fontSize": "15px"}}> Descripción </label>
                  <textarea placeholder=" ¿Qué está pasando en la loma?"
                      rows="3"
                      id="description"
                      name = "description"
                      value = {description}
                      onChange = {handleInputChange}
                      required
                      className=' form-control form-textarea-white'
                      >
                  </textarea>
                </div>

                <div className='div-add-image'>
                  <label htmlFor="fileImg"> <i className="fa-solid fa-image  image-upload"> </i> Agregar imagen</label>
                  <input
                    type="file"
                    name ="archivo"
                    id="fileImg"
                    accept=".jpg, .jpeg, .png"
                    onChange={ handleFileChange }
                    />
                </div>
                <hr/>
                <div className="form-group">
                  <label className="form-label " style={{"fontSize": "15px", }}> La publicación se mostrará en: </label>
                  <input
                      type="text"
                      value = {colonia}
                      className="form-control"
                      name = "colonia"
                      onChange={ handleInputChange}
                  />
                </div>
  
                <div className="form-group d-flex justify-content-end">
                    <button type="submit" className="btn-create-post"  > Publicar </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

//CreatePost.propTypes = {}

export default CreatePost