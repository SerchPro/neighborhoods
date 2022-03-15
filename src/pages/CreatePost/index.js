import React from 'react'
//import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm';
import Titlescreen from '../../components/Titlescreen';


const CreatePost = () => {

  const [ formValues, handleInputChange ] = useForm({
    title: 'mi titulo',
    password: 'Paleontologo49',
    colonia: 'la loma'
  });

  const { title, descripcion, colonia } = formValues;

  const handleLogin = () =>{

  }
  return (
    <div className='backgroud-100vh'>
        <Titlescreen title = {"Crear publicación"}/>

        <div className='container'>
          <div className='row d-flex justify-content-center'>
            <div className='col-12 col-md-9'>

              <form onSubmit={ handleLogin }>
                <select className="form-select form-select-lg select-category" aria-label=".form-select-sm example">
                  <option selected>Elige una categoría</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
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
                  <label htmlFor='descripcion'  style={{"fontSize": "15px"}}> Descripción </label>
                  <textarea placeholder=" ¿Qué está pasando en la loma?"
                      rows="3"
                      id="descripcion"
                      name = "descripcion"
                      value = {descripcion}
                      onChange = {handleInputChange}
                      required
                      className=' form-control form-textarea-white'
                      >
                  </textarea>
                </div>

                <div className='div-add-image'>
                  <label htmlFor="fileImg"> <i className="fa-solid fa-image  image-upload"> </i> Agregar imagen</label>
                  <input type="file" name ="archivo" id="fileImg" accept=".jpg, .jpeg, .png"/>
                </div>
                  

                
                <div className="form-group">
                  <label className="form-label " style={{"fontSize": "15px", }}> La publicación se mostrará en: </label>

                  <input
                      type="text"
                      value = {colonia}
                      className="form-control"
                      name = "colonia"
                      onChange={ handleInputChange}
                      disabled
                      readonly
                      
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