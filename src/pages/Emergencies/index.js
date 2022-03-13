import React from 'react'
import PropTypes from 'prop-types'

const Emergencies = props => {
    return (
    <div className='backgroud-100vh'>
        <div className='d-flex justify-content-start  title-page noPadding'>
            <i class="fa-solid fa-chevron-left d-flex align-items-center iarrow"></i>
            <p className='text180 d-flex align-items-center m-0'> Emergencias</p>
        </div>

    <div className='container '>
        <div className='row'>
            <div className='col-12 col-md-6  d-flex justify-content-center justify-content-md-start'>
                <i class="fa-solid fa-phone iemerg "></i> Emergencias
            </div>
            <div className='col-12 col-md-6  d-flex justify-content-center'>
                <p>55-53-66-44-44</p>
            </div>
        </div>

        <div className='row'>
            <div className='col-12 col-md-6  d-flex justify-content-center justify-content-md-start'>
                <i class="fa-solid fa-phone iemerg "></i> Bomberos
            </div>
            <div className='col-12 col-md-6  d-flex justify-content-center'>
                <p>55-55-65-36-38</p>
            </div>
        </div>

        <div className='row'>
            <div className='col-12 col-md-6  d-flex justify-content-center justify-content-md-start'>
                <i class="fa-solid fa-phone iemerg "></i> Protección civil
            </div>
            <div className='col-12 col-md-6  d-flex justify-content-center'>
                <p>55-53-90-65-58</p>
            </div>
        </div>

        <div className='row'>
            <div className='col-12 col-md-6  d-flex justify-content-center justify-content-md-start'>
                <i class="fa-solid fa-phone iemerg "></i> Atención ciudadana
            </div>
            <div className='col-12 col-md-6  d-flex justify-content-center'>
                <p>55-53-66-44-50</p>
            </div>
        </div>

        <div className='row'>
            <div className='col-12 col-md-6  d-flex justify-content-center justify-content-md-start'>
                <i class="fa-solid fa-phone iemerg "></i> C2 central de emergencias Tlalnepantla oriente
            </div>
            <div className='col-12 col-md-6  d-flex justify-content-center'>
                <p>55-57-50-14-77</p>
            </div>
        </div>
    </div>

    </div>
  )
}

Emergencies.propTypes = {}

export default Emergencies