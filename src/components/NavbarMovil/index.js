import React from 'react'
import PropTypes from 'prop-types'

const NabvarMovil = props => {
    return (
        <div className="menuMovil d-md-none">
            {/* Font Awesome icons */}
            <i className="far fa-comment"></i>
            <i className="fas fa-retweet"></i>
            <i className="far fa-heart"></i>
            <i className="fas fa-share"></i>
        </div>
    )
}

NabvarMovil.propTypes = {}

export default NabvarMovil