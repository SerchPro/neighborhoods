import React from 'react'
//import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import moment from 'moment';
import './comment.css'


const Comment = ({createdAt, _user ,comment}) => {
    //console.log(createdAt, _user ,comment)
    const noteDate = moment(createdAt);

    return (
        <div className="comment">
            <Link to={`/profile/${_user?.username}`} className='linka'>
                <img
                    src={_user?.image_url}
                    className="profile-comment"
                    alt="profile"
                    />
            </Link>
            <div className="body-comment">
                <div className="top-comment">
                        <Link to={`/profile/${_user?.username}`} className='linka'>
                            <span className="handle-comment">@{_user?.username}</span>
                        </Link>
                    <span className="timestamp-comment">{  moment(noteDate).endOf('day').fromNow()}</span>
                </div>
                <div>
                    <p className="message-comment"> {comment} </p>
                </div>
            </div>
    </div>
    )
}

//Comment.propTypes = {}

export default Comment