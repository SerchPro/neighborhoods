import React, { useEffect } from 'react'
//import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { useDispatch , useSelector} from 'react-redux';
import MyPosts from '../../components/Myposts';
import Titlescreen from '../../components/Titlescreen';
import { useParams } from 'react-router-dom'
import { startLoadingUser } from '../../actions/user';
import Loader from '../Loader';


const Profile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();

  const {  _id , name, image_url, bio} = useSelector(state => state.user)
  const {  user } = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(startLoadingUser(username))

  }, [dispatch, username]);

  if (!_id ){
    return ( <Loader/>)
  }
  
  return (
    <div>
    <Titlescreen title = {name}/>
      <div className='container form-Profile'>
          <div className='row d-flex justify-content-around'>
            <div className=' offset-2 col-5  offset-md-0 col-md-4 noPadding'>
              <div className=' '>
                <Link to="/edit-profile">
                    <img
                        src={image_url}
                        className="profile-img"
                        alt="profile"
                        />
                    <br/>
                  </Link>
              </div>
              <br/>
            </div>

            <div className='col-5 col-md-3 noPadding'>
              <button type="button" className='btn-profile-edit'>
              { (user._id === _id)?
                <Link
                  className='linka'
                  to="/edit-profile"
                >
                  Editar perfil
                </Link>
                :
                <Link
                  className='linka'
                  to="/edit-profile"
                >
                  Seguir
                </Link>
              }
              </button>
            </div>
          </div>

          <div >
                <p className='name-profile'> {name }</p>
                <p className='username-profile'> @{username} </p>
          </div>


          <div className='row noPadding'>
            <div className='col-12 col-md-6 '>
              <button type="button" className='btnwhite'> Mis publicaciones </button>
            </div>
            <div className='col-12 col-md-6 '>
              <button type="button" className='btnwhite '>   Favoritos </button>
            </div>
          </div>

      </div>

      <MyPosts/>
    </div>

  )
}

//Profile.propTypes = {}

export default Profile