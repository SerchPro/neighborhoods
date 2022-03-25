import React from 'react'
//import PropTypes from 'prop-types'

const SearchBar = ({ value, changeInput, neighborhood }) => {

    return (
            <div className='search'>
                    <h1 className='text-center linkMenuweb'> {neighborhood} </h1>
                    <div className="form-group d-flex justify-content-center">
                        <input
                            id = "passwordlabel"
                            maxLength="100"
                            type="search"
                            value = {value}
                            className="form-control btnwhiteSearching"
                            placeholder={`Buscar en ${neighborhood}`}
                            name = "searchText"
                            autoComplete='off'
                            onChange={ changeInput}
                        />
                    </div>
            </div>
        )
}

//Search.propTypes = {}

export default SearchBar