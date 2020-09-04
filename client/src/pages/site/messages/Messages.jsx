import React, { useState } from "react";
import PropTypes from "prop-types";

// components
import MessagePanel from "components/messages/MessagePanel";
import SendMessage from "components/messages/SendMessage";
import RoomPanel from "components/messages/RoomPanel";
import { connect } from "react-redux";
import { getPost } from "store/actions/post.action";
import { useEffect } from "react";
import PostHeader from "components/messages/PostHeader";
import MessageHeader from "components/messages/MessageHeader";

import ScrollToBottom from 'react-scroll-to-bottom';

const Messages = ({ getPost, posts: { post, loading }, match }) => {
  const {
    params: { id },
  } = match;
  useEffect(() => {
    getPost(id);
  }, [getPost, id]);
  const [msgs, setMsgs] = useState([]) 
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const renderRightMessage = (message, i) => {
    return (
      <div key={i} className="my-4" style={{ marginRight: "50%" }}>
        <div className="italic text-xs ml-2 mb-1">You - {post.date}</div>
        <div className="bg-blue-100 border border-gray-300 rounded-md px-3 py-2 inline-block">
          {message}
        </div>
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setMessage(message);
    setMsgs(msgs.concat(message))
    setMessage("");
    
  }
  return loading || post === null ? (
    <div>Loading...</div>
  ) : (
    <div className="mt-2 flex relative">
      <div className="hidden sm:block w-1/4">
        <RoomPanel />
      </div>
      <div
        className="flex flex-col justify-between space-y-2 lg:w-2/4 sm:w-3/4 mt-4 px-8"
        style={{ height: "calc(100vh - 110px)" }}
      >
        <div className="header h-24 w-full">
          <MessageHeader post={post} />
        </div>
        <ScrollToBottom className="header h-full w-full overflow-y-auto">
          <MessagePanel  isSubmitted={isSubmitted} renderRightMessage={renderRightMessage} msgs={msgs} post={post} />
        </ScrollToBottom>
        <div className="header h-24w-full">
  {post.title && post.thumbnail ? <>{isSubmitted ? null : <PostHeader post={post} />}</> : null }
          <SendMessage handleSubmit={handleSubmit} message={message} setMessage={setMessage} />
        </div>
        {/* <MessagePanel post={post} /> */}
      </div>
    </div>
  );
};

Messages.propTypes = {
  getPost: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.post,
});

export default connect(mapStateToProps, { getPost })(Messages);

