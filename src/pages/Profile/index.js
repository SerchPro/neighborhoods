import React, { useEffect, useState } from 'react'
//import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { useDispatch , useSelector} from 'react-redux';
import Titlescreen from '../../components/Titlescreen';
import { useParams } from 'react-router-dom'
import { startLoadingUser} from '../../actions/user';
import Loader from '../Loader';
import Posts from '../../components/Posts'
import FollowUnfollow from '../../components/FollowUnfollow/inde';


const Profile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();

  const {  _id , name, image_url, bio,  myPosts, myFavorites, myFollowers, myFollowings} = useSelector(state => state.user)
  const {  user } = useSelector(state => state.auth);

  const [sectionPost, setsectionPost] = useState(true);
  const [data, setData] = useState([]);

  const follow = myFollowers?.includes(user._id) || false

  const siguiendo = myFollowings?.length;
  const seguidores = myFollowers?.length;

  useEffect(() => {
    if(sectionPost){
      setData(myPosts)
    }else{
      setData(myFavorites)
    }
  }, [sectionPost, myPosts, myFavorites])
  

  useEffect(() => {
    dispatch(startLoadingUser(username))

  }, [dispatch, username]);

  


  if (!_id ){
    return ( <Loader/>)
  }
  
  return (
      <div className='container noPadding no-margin min-vh-100'>
        <div className='row noPadding no-margin'>
          <div className='col-12 col-md-8 noPadding no-margin'>
            <Titlescreen title = {name}/>
            <div className='container '>
              <div className='row d-flex justify-content-between'>
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
                  
                  { (user._id === _id)
                    ?
                      <button type="button" className='btn-profile-edit'>
                      <Link
                        className='linka'
                        to="/edit-profile"
                      >
                        Editar perfil
                      </Link>
                      </button>
                    :
                      <FollowUnfollow follow={follow} id = {_id}/>
                  }
                  
                </div>
              </div>
              <div >
                    <p className='name-profile'> {name }</p>
                    <p className='username-profile'> @{username} </p>
                    <p className='bio-profile'> {bio} </p>
              </div>

              <div className="d-flex justify-content-start follows">
                <p className="" > {siguiendo}  <span className="siguiendo" >Siguiendo</span> </p>
                <p className="seguidores"> {seguidores}  <span >Seguidores</span> </p>
              </div>

              <div className='row noPadding'>
                <div className='col-12 col-md-6 '>
                  <button type="button" className='btnwhite'  onClick={()=> setsectionPost(true)}> Mis publicaciones </button>
                </div>
                <div className='col-12 col-md-6 '>
                  <button type="button" className='btnwhite ' onClick={()=> setsectionPost(false)}>   Favoritos </button>
                </div>
              </div>
            </div>
              <Posts  posts =  { data}/>
          </div>

          <div className=' d-none d-md-block col-md-4 div-line min-vh-100'>

          </div>
        </div>
      </div>
  )
}

//Profile.propTypes = {}

export default Profile