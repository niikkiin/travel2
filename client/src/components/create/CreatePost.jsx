import React from "react";
// import PropTypes from "prop-types";

// icons
import { Icon } from "@iconify/react";
import imageIcon from "@iconify/icons-carbon/image";
import fileGifLine from "@iconify/icons-ri/file-gif-line";

// cropper
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const CreatePost = ({
  handlePostSubmit,
  setPost,
  post,
  setCropper,
  getCropData,
  image,
  setImage
}) => {
  const { caption } = post;

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  
  const imageOnChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      // setPost({ ...post, image: reader.result });
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <div className="mt-2 mb-4 flex border border-gray-400 mx-8 md:mx-16 p-2 sm:p-8">
      <img
        className="w-16 h-16 rounded-full border border-gray-400 z-0 object-cover"
        src="https://png.pngtree.com/png-vector/20190217/ourlarge/pngtree-abstract-circle-business-logo-png-image_554233.jpg"
        alt="Sam Rose"
      />
      <form className="w-full" onSubmit={(e) => handlePostSubmit(e)}>
        <div className="mx-2">
          <div className="relative">
            <input
              maxLength="64"
              type="text"
              placeholder="Tell us your caption Sam"
              className="outline-none text-gray-700 w-full text-base py-3 pl-2 pr-16 border-b"
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
          {!image ? null : (
            <div>
              <Cropper
                style={{ height: 400, width: "100%" }}
                initialAspectRatio={16 / 9}
                aspectRatio={16 / 9}
                preview=".img-preview"
                src={image}
                viewMode={1}
                guides={true}
                minCropBoxHeight={10}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                onInitialized={(instance) => {
                  setCropper(instance);
                }}
              />
            </div>
          )}

          <div className="flex justify-between mt-2">
            <div className="flex items-center">
              <input
                className="hidden"
                id="image"
                type="file"
                accept="image/*"
                name="image"
                onChange={imageOnChange}
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
              onClick={getCropData}
              disabled={!caption || !image}
              className={!caption || !image ?
                `bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 px-4 text-white duration-500 font-medium rounded-full hover:-translate-y-1 focus:-translate-y-1 transform transition ease-in-out outline-none hover:outline-none focus:outline-none cursor-not-allowed opacity-50`
                :
                `bg-blue-500 hover:bg-blue-700 focus:bg-blue-600 cursor-pointer px-4 text-white hover:-translate-y-1 focus:-translate-y-1 transform transition ease-in-out duration-300 font-medium rounded-full outline-none hover:outline-none focus:outline-none`
              
            }
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
