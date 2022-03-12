import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Post from '../Post'



const MyPosts = () => {

 //const { MyPosts} = useSelector(state => state.MyPosts)

 //const MyPosts = [1,2,3]



 const MyPosts = [
  {
    id: 1,
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "1h ago",
    message:
      "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTUJECE_4Nf5tl0EzyK5ye_BzHPu4L03cvA&usqp=CAU"
  },
  {
    id: 2,
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "2h ago",
    message:
      "sometimes. the human presses their noggin against mine. to figure out what i’m thinking. so i just think really hard. about how much i love them. and hope they figure it out",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQl7kr_hudbEj38qd0_WMsm7yau1RiGLc8tg&usqp=CAU"
   },
  {
    id: 3,
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "3h ago",
    message:
      "here is what. i plan to accomplish today: \n\n2. bark loudly. but at nothing \n7. lose my ball under the couch\n7b. politely ask the human. to get my ball\n3. immediately lose it again. under the same couch\n4. big nap. you have worked hard\n2. repeat",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXe_tZYax_crZC-VC1AZupUkQgue7a18Bwew&usqp=CAU"
  },
  {
    id: 4,
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "1h ago",
    message:
      "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwictveVl8xxMMMm4aZq9Zoy85XDKc3fRN-w&usqp=CAU"
    },
  {
    id: 5,
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "2h ago",
    message:
      "sometimes. the human presses their noggin against mine. to figure out what i’m thinking. so i just think really hard. about how much i love them. and hope they figure it out",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVmXr28usuQyn2VTvvA1pOopLkMWz_J-85g&usqp=CAU"
  },
];

  return (
        <div>
            {
                MyPosts.map( post => (
                    <Post 
                        key={ post.id }
                        { ...post }
                    />
                ))
            }

        </div>
  )
}

MyPosts.propTypes = {}

export default MyPosts