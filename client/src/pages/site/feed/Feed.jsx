import React, { useState } from "react";
// import PropTypes from 'prop-types'

// components
import Posts from "components/post/Posts";
import CreatePost from "components/create/CreatePost";

// data
import { POST_DATA } from "data/posts.data";

const Feed = (props) => {
  const [post, setPost] = useState({
    caption: "",
    croppedImage: "",
  });

  const { caption, croppedImage } = post;

  const [postData, setPostData] = useState(POST_DATA);
  const [cropper, setCropper] = useState();
  const [image, setImage] = useState();

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setPost({
        ...post,
        croppedImage: cropper.getCroppedCanvas().toDataURL(),
      });
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    // await showCroppedImage();
    try {
      setPostData([
        ...postData,
        {
          id: 1,
          postedBy: "Sam Rose",
          avatar:
            "https://png.pngtree.com/png-vector/20190217/ourlarge/pngtree-abstract-circle-business-logo-png-image_554233.jpg",
          location: "Eco-Tours",
          time: "just now",
          title: caption,
          thumbnail: croppedImage,
        },
      ]);
    } catch (e) {
      console.error(e);
    }

    setPost({ caption: "", croppedImage: "" });
    setImage("");
  };

  return (
    <div className="flex">
      <div className="hidden md:block w-2/4"></div>
      <div className="w-full relative">
        <div className=" px-4 pt-4 pb-2 mx-8 text-3xl text-blue-500">
          Main Feed
        </div>
        <CreatePost
          handlePostSubmit={handlePostSubmit}
          setPost={setPost}
          post={post}
          setCropper={setCropper}
          getCropData={getCropData}
          image={image}
          setImage={setImage}
        />
        <Posts postData={postData} />
      </div>
    </div>
  );
};

Feed.propTypes = {};

export default Feed;
