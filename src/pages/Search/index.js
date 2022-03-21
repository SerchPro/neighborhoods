import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingNotes } from '../../actions/posts';
import EmptyView from '../../components/EmptyView';
import Posts from '../../components/Posts';
//import PropTypes from 'prop-types'

const Search = () => {

    const { posts }  = useSelector(state => state.posts);

    console.log(posts)

    const [list, setList] = useState(posts);
    const [searchInput, setSearchInput] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoadingNotes())
      }, [dispatch]);

    useEffect(() => {
        applyFilters();
    }, [searchInput]);

    const applyFilters = () =>{
        let updatedList = [];

        if (searchInput) {
            updatedList = posts.filter(
                (item) =>
                    item.description.toLowerCase().search(searchInput.toLowerCase().trim()) !==
                    -1
            );
        }
        console.log("update---", updatedList)
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
            {

                (list) ?
                <Posts posts={list} />
                :
                <EmptyView/>
            }
            

        </div>
        )
}

//Search.propTypes = {}

export default Search