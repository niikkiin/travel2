import { GET_POSTS, POST_ERROR, GET_POST, CREATE_POST } from "./action.types";

// NOTE temporary data
import { POST_DATA } from "data/posts.data";

// get posts
export const getPosts = () => async dispatch => {
  try {

    dispatch({
      type: GET_POSTS,
      payload: POST_DATA
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
    })
  }
}

// get post
export const getPost = (id) => async dispatch => {
  try {
    // const post = POST_DATA.find(post => post.id === id);
    // console.log(id);
    const post = POST_DATA.find(post => post.id === 2);
    // console.log(post);
    dispatch({
      type: GET_POST,
      payload: post
    })
  }catch(err) {
    dispatch({
      type: POST_ERROR,
    });
  }
}

// create post
export const createPost = (formData) => dispatch => {
  try {
    console.log("formdata", formData);
    dispatch({
      type: CREATE_POST,
      payload: formData
    })
  } catch (err) {
    dispatch({
      type: POST_ERROR,
    });
  }
}