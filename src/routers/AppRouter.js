import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { StartChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { DashboardRoutes } from './DashboardRoutes';
import { startLoadingUser } from '../actions/user';


export const AppRouter = () => {

  const dispatch = useDispatch();
  const { checking, uid } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch( StartChecking())
    
  }, [dispatch,uid])

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
                <DashboardRoutes/>
              </PrivateRoute>
            }
          />
        </Routes>
    </BrowserRouter>
  )
}
