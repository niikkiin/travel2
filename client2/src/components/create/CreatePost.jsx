import React, { useState } from "react";
// import PropTypes from "prop-types";

// icons
import { Icon } from "@iconify/react";
import imageIcon from "@iconify/icons-carbon/image";
import fileGifLine from "@iconify/icons-ri/file-gif-line";

const CreatePost = (props) => {
  const [post, setPost] = useState({
    caption: "",
  });

  const { caption } = post;

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Create Post Success");
  };

  return (
    <div className="mt-2 mb-4 flex items-center border border-gray-400 mx-16 p-8">
      <img
        className="w-16 h-16 rounded-full border border-gray-400 z-0 object-cover"
        src="https://png.pngtree.com/png-vector/20190217/ourlarge/pngtree-abstract-circle-business-logo-png-image_554233.jpg"
        alt="Sam Rose"
      />
      <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
        <div className="mx-2">
          <div className="relative">
            <input
              maxLength="64"
              type="text"
              placeholder="Tell us your caption Sam"
              className="outline-none text-gray-700 w-full text-base py-3 pl-2 pr-4 border-b"
              value={caption}
              name="caption"
              onChange={(e) => handleChange(e)}
            />
            {!caption ? null : (
              <span
                className={
                  caption.length === 64
                    ? `absolute text-sm text-orange-500 right-1`
                    : `absolute text-sm text-blue-500 right-1`
                }
                style={{ right: "1rem", top: "0.8rem" }}
              >
                {caption.length} / 64
              </span>
            )}
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex items-center">
              <input
                className="hidden"
                id="image"
                type="file"
                accept="image/*"
                name="image"
              />
              <label
                className="mr-3 flex items-center justify-center cursor-pointer text-blue-500 p-1 hover:bg-blue-100 rounded-full  duration-500"
                htmlFor="image"
              >
                <Icon className=" w-8 h-8 " icon={imageIcon} />
              </label>
              <label
                className="mr-3 flex items-center justify-center cursor-pointer text-blue-500 p-1 hover:bg-blue-100 rounded-full  duration-500"
                htmlFor=""
              >
                <Icon className=" w-8 h-8 " icon={fileGifLine} />
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 focus:bg-blue-600 cursor-pointer px-4 text-white duration-500 font-medium rounded-full"
            >
              Create Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

CreatePost.propTypes = {};

export default CreatePost;
