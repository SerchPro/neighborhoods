import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Posts from '../../components/Posts';
//import PropTypes from 'prop-types'

const Search = () => {

    const { posts }  = useSelector(state => state.posts);

    console.log(posts)

    const [list, setList] = useState(posts);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        applyFilters();
    }, [searchInput]);

    const applyFilters = () =>{
        let updatedList = posts;
        console.log(posts)
        if (searchInput) {
            updatedList = updatedList.filter(
                (item) =>
                    item.description.toLowerCase().search(searchInput.toLowerCase().trim()) !==
                    -1
            );
        }

        setList(updatedList);
    }

    const handleSearch = (e) =>{
        setSearchInput(e.target.value)
    }

    return (
        <div >
            <div className='search-light'>
                <h1 className='text-center linkMenuweb'> La loma </h1>
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
                        onChange={handleSearch }
                    />
                </div>
            </div>

            <Posts posts={list} />

        </div>
        )
}

//Search.propTypes = {}

export default Search