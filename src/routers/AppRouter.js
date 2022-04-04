import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { StartChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { DashboardRoutes } from './DashboardRoutes';
import Loader from '../pages/Loader/Loader';

export const AppRouter = () => {

  const dispatch = useDispatch();
  const { checking, user } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch( StartChecking())
    
  }, [dispatch,user?._id])

  if (checking ){
    return (<Loader/>)
  }
  
  return (
    <BrowserRouter >
        <Routes >
          <Route exact path='/login' element={
                <PublicRoute uid={user?._id} >
                  <Login/>
                </PublicRoute>
              }
          />
          <Route exact path='/signup' element={
                <PublicRoute uid={user?._id} >
                  <Signup/>
                </PublicRoute>
              }
          />
          <Route exact path='/*'
            element={
              <PrivateRoute uid={user?._id}>
                  <DashboardRoutes/>
              </PrivateRoute>
            }
          />
        </Routes>
    </BrowserRouter>
  )
}
