import React from 'react'
//import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { startNewReview } from '../../actions/review';
import { useForm } from '../../hooks/useForm';

const CreateComment = ({idPost}) => {

    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleComment = (e) =>{
        e.preventDefault();
        const data = {comment, "userID": user._id, "idPost": idPost}
        dispatch(startNewReview(data))
        reset()
    }

    const [ formValues, handleInputChange, reset ] = useForm({
        comment : '',
        });


    const { comment } =  formValues;

    return (
        <div className='container comment-create no-margin'>
            <div className='row  d-flex justify-content-center'>

                <div className='col-2 noPadding'>
                    <div className='centerDiv d-flex align-items-center  justify-content-start'>
                        <img
                            src={user.image_url}
                            className="img-user-comment"
                            alt="profile"
                            />
                        <br/>
                    </div>
                </div>

                <div className='col-10  '>
                    <form onSubmit={ handleComment }>
                        <div className="input-container">
                            <input
                                className=' input-field'
                                type= "text"
                                onChange = {handleInputChange}
                                value = {comment}
                                name = "comment"
                                placeholder='Escribe tu respuesta'
                            />
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button type="submit" className=' icon'>  Responder </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

//CreateComment.propTypes = {}

export default CreateComment