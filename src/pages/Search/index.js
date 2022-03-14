import React from 'react'
import PropTypes from 'prop-types'

const Search = props => {
  return (
    <>
        <h1 className='text-center linkMenuweb'> La loma </h1>
        <div className="form-group d-flex justify-content-center">
            <input
                id = "passwordlabel"
                maxLength="100" 
                type="search"
                //value = {password}
                className="form-control btnwhiteSearching"
                placeholder="Buscar publicaciones"
                name = "search"
                //onChange={ handleInputChange}
            />
        </div>

        <div className='d-flex justify-content-center'>
            <div className='filters d-flex justify-content-center'>
                <h2> Filtros </h2>
            </div>
        </div>
    </>

    
  )
}

Search.propTypes = {}

export default Search