import React from 'react'
import PropTypes from 'prop-types'

const NabvarMovil = props => {
    return (
        <div className="menuMovil d-md-none">
            {/* Font Awesome icons */}
            <i class="far fa-comment"></i>
            <i class="fas fa-retweet"></i>
            <i class="far fa-heart"></i>
            <i class="fas fa-share"></i>
        </div>
    )
}

NabvarMovil.propTypes = {}

export default NabvarMovil