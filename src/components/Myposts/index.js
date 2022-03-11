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