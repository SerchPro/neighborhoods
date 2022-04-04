import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingNotes } from '../../actions/posts';
import Posts from '../../components/Posts/Posts';
//import PropTypes from 'prop-types'
import './style.css';

const Search = () => {
    const { posts }  = useSelector(state => state.posts);
    const [list, setList] = useState(posts);
    const [searchInput, setSearchInput] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoadingNotes())
    }, [dispatch]);

    useEffect(() => {
        let updatedList = [];
        if (searchInput) {
            updatedList = posts.filter(
                (item) =>
                    item.description.toLowerCase().search(searchInput.toLowerCase().trim()) !==
                    -1
            );
        }
        setList(updatedList);
    }, [searchInput, posts]);

    const handleSearch = (e) =>{
        setSearchInput(e.target.value)
    }

    return (
        <div className='min-vh-100'>
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
            {
                list &&
                <Posts posts={list} />
            }
        </div>
        )
}

//Search.propTypes = {}

export default Search