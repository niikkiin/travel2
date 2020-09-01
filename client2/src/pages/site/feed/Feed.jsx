import React from 'react'
import Posts from 'components/post/Posts'
import CreatePost from 'components/create/CreatePost'
// import PropTypes from 'prop-types'

const Feed = props => {
  return (
    <div>
      <div className=" px-4 pt-4 pb-2 mx-8 text-3xl text-blue-500">Main Feed</div>
      <CreatePost />
      {/* <div className="text-3xl text-blue-500 font-medium mt-8 ml-8">Main Feed</div> */}
      <Posts />
    </div>
  )
}

Feed.propTypes = {

}

export default Feed
