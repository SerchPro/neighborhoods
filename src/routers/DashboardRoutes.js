import { Routes, Route, Navigate} from 'react-router-dom'
import NabvarMovil from '../components/NavbarMovil';
import NavbarWeb from '../components/NavbarWeb';
import ChangePassword from '../pages/ChangePassword';
import EditProfile from '../pages/EditProfile';
import Emergencies from '../pages/Emergencies';

import Feed from '../pages/Feed';
import OnePost from '../pages/OnePost';
import Postuser from '../pages/Postuser';
import Profile from '../pages/Profile';

export const DashboardRoutes = () => {
    return (

    <div className='container-fluid container-dashboard noPadding no-margin'>

        <div className='row noPadding no-margin'>

            <div className='d-none d-md-block  col-md-3 container-navbar-web' >
                <NavbarWeb/>
            </div>

            <div className=' col-12 col-md-6  noPadding '>
                <Routes >
                    <Route path="profile" element={<Profile />} />
                    <Route path="emergencies" element={<Emergencies />} />
                    <Route path="postuser" element={<Postuser />} />
                    <Route path="onepost" element={<OnePost />} />
                    <Route path="edit-profile" element={<EditProfile />} />
                    <Route path="change-password" element={<ChangePassword />} />
                    <Route path='/' element = {<Feed/>} />
                    <Route path = '*' element = { <Navigate replace to = '/' />} />
                </Routes>
                <NabvarMovil/>
            </div>

            <div className='d-none d-md-block  col-md-3 container-searching noPadding' >
                <div className='search'>
                    <h1 className='text-center linkMenuweb'> La loma </h1>
                    <div className="form-group d-flex justify-content-center">
                        <input
                            id = "passwordlabel"
                            maxLength="100" 
                            type="search"
                            //value = {password}
                            className="form-control btnwhiteSearching"
                            placeholder="Buscar publicaciones"
                            name = "search"
                            //onChange={ handleInputChange}
                        />
                    </div>

                    <div className='d-flex justify-content-center'>
                        <div className='filters d-flex justify-content-center'>
                            <h2> Filtros </h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}