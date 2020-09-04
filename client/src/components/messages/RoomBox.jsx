import React from 'react'
// import PropTypes from 'prop-types'

const RoomBox = ({info}) => {
  const { name, lastMessage, avatar, status } = info;

  const getStatus = (status) => {
    if (status === 'online') {
      return <div className="bg-green-600 rounded-full w-4 h-4 mr-2"></div>;
    } else if (status === 'idle') {
      return <div className="bg-orange-400 rounded-full w-4 h-4 mr-2"></div>;
    } else {
      return <div className="bg-gray-400 rounded-full w-4 h-4 mr-2"></div>;
    }
  }
  return (
    <div className="border-b border-gray-400 flex">
      <img src={avatar} alt="name" className="rounded-full border border-gray-400 w-10 h-10 m-2"/>
      <div className="flex flex-col align-middle justify-center">
        {/* status and name */}
        <div className="flex align-middle items-center">
          {getStatus(status)}
          <div className="text-base">{name}</div>
        </div>
        {/* last message info */}
        <div className="text-sm">
          Last Message: <span className="text-gray-600 capitalize">{lastMessage}</span>
        </div>
      </div>
    </div>
  )
}

RoomBox.propTypes = {

}

export default RoomBox
