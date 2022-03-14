import { Routes, Route, Navigate} from 'react-router-dom'
import NabvarMovil from '../components/NavbarMovil';
import NavbarWeb from '../components/NavbarWeb';
import ChangePassword from '../pages/ChangePassword';
import CreatePost from '../pages/CreatePost';
import EditProfile from '../pages/EditProfile';
import Emergencies from '../pages/Emergencies';

import Feed from '../pages/Feed';
import OnePost from '../pages/OnePost';
import Postuser from '../pages/Postuser';
import Profile from '../pages/Profile';
import Search from '../pages/Search';

export const DashboardRoutes = () => {
    return (

    <div className='container-fluid container-dashboard noPadding no-margin'>

        <div className='row noPadding no-margin justify-content-center'>

            <div className='d-none d-md-block  col-md-3 container-navbar-web' >
                <NavbarWeb/>
            </div>

            <div className=' col-12 col-md-5  noPadding '>
                <Routes >
                    <Route path="profile" element={<Profile />} />
                    <Route path="emergencies" element={<Emergencies />} />
                    <Route path="postuser" element={<Postuser />} />
                    <Route path="onepost/:id" element={<OnePost />} />
                    <Route path="edit-profile" element={<EditProfile />} />
                    <Route path="change-password" element={<ChangePassword />} />
                    <Route path="create-post" element={<CreatePost />} />
                    <Route path="search" element={<Search />} />
                    <Route path='/' element = {<Feed/>} />
                    <Route path = '*' element = { <Navigate replace to = '/' />} />
                </Routes>
                <NabvarMovil/>
            </div>

            <div className='d-none d-md-block  col-md-3 container-searching noPadding' >
                <div className='search'>
                    <Search/>
                </div>
            </div>

        </div>
    </div>
    )
}