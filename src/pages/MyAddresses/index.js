import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadAddresses } from '../../actions/address';
import Direction from '../../components/Direction';
import PostalCode from '../../components/PostalCode';
import Titlescreen from '../../components/Titlescreen';
//import PropTypes from 'prop-types'

const MyAddreddes = () => {
    const dispatch = useDispatch();
    const {addresses} = useSelector(state => state.addresses)
    useEffect(() => {
      dispatch(startLoadAddresses())
    }, [dispatch])
    
    return (
        <div>
            <div className='container noPadding no-margin min-vh-100'>
                <div className='row noPadding no-margin'>
                    <div className='col-12 col-md-8 noPadding no-margin'>
                        <Titlescreen title = {"Mis direcciones"}/>
                        <div className='p-3'>
                            <table className="table table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Colonia</th>
                                        <th scope="col">Etiqueta</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        addresses.map( (address, index) => (
                                            <Direction
                                                key={address._id}
                                                index = {index}
                                                address = {address}
                                                />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        <PostalCode/>
                    </div>
                    <div className='d-none d-md-block col-md-4 div-line'>

                    </div>
                </div>
            </div>
        </div>
    )
}

//MyAddreddes.propTypes = {}

export default MyAddreddes