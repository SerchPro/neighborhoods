import { Routes, Route, Navigate} from 'react-router-dom'
import NavbarWeb from '../components/NavbarWeb';
import Emergencies from '../pages/Emergencies';

import Feed from '../pages/Feed';
import Profile from '../pages/Profile';

export const DashboardRoutes = () => {
    return (

    <div className='container-fluid'>
        <div className='row'>
            <div className='col-3'>
                <NavbarWeb/>
            </div>
            <div className='col-6'>
                <Routes>
                    <Route path="profile" element={<Profile />} />
                    <Route path="emergencies" element={<Emergencies />} />
                    <Route path='/' element = {<Feed/>} />
                    <Route path = '*' element = { <Navigate replace to = '/' />} />
                </Routes>
            </div>

            <div className='col-3'>
            </div>

        </div>
    </div>
    )
}