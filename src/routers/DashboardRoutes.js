import { useSelector } from 'react-redux';
import { Routes, Route, Navigate} from 'react-router-dom'
import NabvarMovil from '../components/NavbarMovil';
import NavbarWeb from '../components/NavbarWeb';
import Address from '../pages/Address';
import ChangePassword from '../pages/ChangePassword';
import CreatePost from '../pages/CreatePost';
import EditProfile from '../pages/EditProfile';
import Emergencies from '../pages/Emergencies';

import Feed from '../pages/Feed';
import MyAddreddes from '../pages/MyAddresses';
import OnePost from '../pages/OnePost';
import Profile from '../pages/Profile';
import Search from '../pages/Search';

export const DashboardRoutes = () => {
    const {user } = useSelector(state => state.auth)

    return (

    <div className='container-fluid container-dashboard p-0 m-0'>

        <div className='row p-0 m-0 justify-content-center'>
        {   (user?.addressactive)
            ?
            <>
                <div className='d-none d-md-block col-md-3 container-navbar-web' >
                    <NavbarWeb/>
                </div>
                <div className=' col-12 col-md-8  m-0 p-0 '>
                    <Routes >
                        <Route path="profile/:username" element={<Profile/>} />
                        <Route path="emergencies" element={<Emergencies/>} />
                        <Route path="onepost/:id" element={<OnePost/>}/>
                        <Route path="edit-profile" element={<EditProfile/>}/>
                        <Route path="change-password" element={<ChangePassword/>}/>
                        <Route path="create-post" element={<CreatePost/>}/>
                        <Route path="search" element={<Search/>}/>
                        <Route path="myaddress" element = {<MyAddreddes/>}/>
                        <Route path='/' element = {<Feed/>}/>
                        <Route path = '*' element = { <Navigate replace to = '/' />} />
                    </Routes>
                    <NabvarMovil/>
                </div>
            </>
            : 
                <Address/>
            }
        </div>
    </div>
    )
}