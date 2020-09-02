import React, { useState } from "react";
// import PropTypes from 'prop-types'

// components
import Posts from "components/post/Posts";
import CreatePost from "components/create/CreatePost";

// data
import { OWN_POST_DATA } from "data/posts.data";

const Profile = (props) => {
  const [postData] = useState(OWN_POST_DATA);
  return (
    <div className="flex">
      <div className="hidden md:block w-2/4"></div>
      <div className="w-full relative">
        <div className=" px-4 pt-4 pb-2 mx-8 text-3xl text-blue-500">
          Your Posts
        </div>
        <CreatePost />
        <Posts postData={postData} />
      </div>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
