import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import Login from '../pages/Login';
import Feed from '../pages/Feed';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { StartChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';


export const AppRouter = () => {

  const dispatch = useDispatch();
  const { checking, uid } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch( StartChecking())
  }, [dispatch])

  if (checking ){
    return ( <h5> Espere porfavor....</h5>)
  }
  
  return (
    <BrowserRouter >
        <Routes >
        
          <Route exact path='/login' element={
                <PublicRoute uid={uid} >
                  <Login/>
                </PublicRoute>
              }
          />

          <Route exact path='/signup' element={
                <PublicRoute uid={uid} >
                  <Signup/>
                </PublicRoute>
              }
          />

          <Route exact path='/*'
            element={
              <PrivateRoute uid={uid}>
                {/*<Feed />*/}
                <Routes>
                    <Route path="profile" element={<Profile />} />
                    <Route path='/' element = {<Feed/>} />
                    <Route path = '*' element = { <Navigate replace to = '/' />} />
                </Routes>
              </PrivateRoute>
            }
          />
        </Routes>
    </BrowserRouter>
  )
}
