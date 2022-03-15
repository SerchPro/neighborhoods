import React from 'react'
//import PropTypes from 'prop-types'
import Post from '../../components/Post';
import { useParams, Navigate } from 'react-router-dom'
import Titlescreen from '../../components/Titlescreen';

const OnePost = () => {

  const params = useParams();

  if (!params.id) {
    return <Navigate to='/' />
}

  const post = {
          id: 4,
          title: 'happy dog',
          user: {
            name: "Thoughts of Dog®",
            image: "https://i.imgur.com/b0EdHVV.jpg",
            handle: "dog_feelings",
          },
          timestamp: "1h ago",
          message:
            "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwictveVl8xxMMMm4aZq9Zoy85XDKc3fRN-w&usqp=CAU"
          }
  return (
    <div className=" backgroud-100vh">
      <Titlescreen title = {post.title}/>

      <div className='container one-post'>
        <div className='row'>
          <div className='col-12'>

          <Post {...post}/>


              
            
          </div>  {/* col */}
        </div> {/* row*/}
      </div>
      
    </div>


  )
}

//OnePost.propTypes = {}

export default OnePost