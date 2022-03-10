import { Routes, Route, Navigate} from 'react-router-dom'
import NabvarMovil from '../components/NavbarMovil';
import NavbarWeb from '../components/NavbarWeb';
import EditProfile from '../pages/EditProfile';
import Emergencies from '../pages/Emergencies';

import Feed from '../pages/Feed';
import OnePost from '../pages/OnePost';
import Postuser from '../pages/Postuser';
import Profile from '../pages/Profile';

export const DashboardRoutes = () => {
    return (

    <div className='container-fluid container-dashboard'>
        <div className='row'>
            <div className='d-none d-md-block  col-md-3 container-navbar-web' >
                <NavbarWeb/>
            </div>
            <div className=' col-12 col-md-6 '>
                <Routes >
                    <Route path="profile" element={<Profile />} />
                    <Route path="emergencies" element={<Emergencies />} />
                    <Route path="postuser" element={<Postuser />} />
                    <Route path="onepost" element={<OnePost />} />
                    <Route path="edit-profile" element={<EditProfile />} />
                    <Route path='/' element = {<Feed/>} />
                    <Route path = '*' element = { <Navigate replace to = '/' />} />
                </Routes>
                <NabvarMovil/>
            </div>

            <div className='d-none d-md-block  col-md-3 ' >
                <h3 className='text-center'> La loma </h3>
                <div className="form-group">
                    <input
                        id = "passwordlabel"
                        type="text"
                        //value = {password}
                        className="form-control formInput"
                        //placeholder="Contraseña"
                        name = "search"
                        //onChange={ handleInputChange}
                    />
                </div>
            </div>

        </div>
    </div>
    )
}