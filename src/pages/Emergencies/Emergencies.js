import React from 'react'
//import PropTypes from 'prop-types'
import Titlescreen from '../../components/Titlescreen/Titlescreen'
import './style.css'
const Emergencies = props => {
    return (
        <div className='container p-0 m-0'>
            <div className='row m-0 p-0'>
                <div className='col-12 col-md-8 p-0 m-0 min-vh-100'>
                    <Titlescreen title = {"Emergencias"}/>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-md-6  d-flex justify-content-center justify-content-md-start'>
                                <i className="fa-solid fa-phone iemerg "></i> Emergencias
                            </div>
                            <div className='col-12 col-md-6  d-flex justify-content-center'>
                                <p>55-53-66-44-44</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-6  d-flex justify-content-center justify-content-md-start'>
                                <i className="fa-solid fa-phone iemerg "></i> Bomberos
                            </div>
                            <div className='col-12 col-md-6  d-flex justify-content-center'>
                                <p>55-55-65-36-38</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-6  d-flex justify-content-center justify-content-md-start'>
                                <i className="fa-solid fa-phone iemerg "></i> Protección civil
                            </div>
                            <div className='col-12 col-md-6  d-flex justify-content-center'>
                                <p>55-53-90-65-58</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-6  d-flex justify-content-center justify-content-md-start'>
                                <i className="fa-solid fa-phone iemerg "></i> Atención ciudadana
                            </div>
                            <div className='col-12 col-md-6  d-flex justify-content-center'>
                                <p>55-53-66-44-50</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 col-md-6  d-flex justify-content-center justify-content-md-start'>
                                <i className="fa-solid fa-phone iemerg "></i> C2 central de emergencias Tlalnepantla oriente
                            </div>
                            <div className='col-12 col-md-6  d-flex justify-content-center'>
                                <p>55-57-50-14-77</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-none d-md-block col-md-4 div-line'>
                </div>
            </div>
        </div>
    )
}

//Emergencies.propTypes = {}

export default Emergencies