import React from 'react'
//import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm'

const Search = ({ value, changeInput }) => {

    /*const [formValues, handleInputChange  ] = useForm({
        "searchText": ""
    })

    const { searchText } = formValues;

    const handleSearch = (e) =>{
        e.preventDefault();
        console.log(searchText)
    }*/
  return (
      <div className='search'>
        {/*<form onSubmit={ handleSearch }>*/}
            <h1 className='text-center linkMenuweb'> La loma </h1>
            <div className="form-group d-flex justify-content-center">
                <input
                    id = "passwordlabel"
                    maxLength="100" 
                    type="search"
                    value = {value}
                    className="form-control btnwhiteSearching"
                    placeholder="Buscar en la loma"
                    name = "searchText"
                    autoComplete='off'
                    onChange={ changeInput}
                />
            </div>

            {/*<div className='d-flex justify-content-center'>
                <div className='filters d-flex justify-content-center'>
                    <h2> Filtros </h2>
                </div>
            </div>*/}
        {/*</form>*/}
    </div>
    )
}

//Search.propTypes = {}

export default Search