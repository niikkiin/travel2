import React from "react";
// import PropTypes from "prop-types";
import { StaticBoxes } from "components/static-boxes/StaticBoxes";
import RoomBox from "./RoomBox";

const RoomPanel = (props) => {
  const roomInfo = [
    {
      id: 1,
      name: "NikkiA",
      lastMessage: "none",
      status: 'offline',
      avatar: "https://png.pngtree.com/png-vector/20190217/ourlarge/pngtree-abstract-circle-business-logo-png-image_554233.jpg",
    },
    {
      id: 2,
      name: "NikkiB",
      lastMessage: "none",
      status: 'idle',
      avatar: "https://png.pngtree.com/png-vector/20190217/ourlarge/pngtree-abstract-circle-business-logo-png-image_554233.jpg",
    },
    {
      id: 3,
      name: "NikkiC",
      lastMessage: "none",
      status: 'online',
      avatar: "https://png.pngtree.com/png-vector/20190217/ourlarge/pngtree-abstract-circle-business-logo-png-image_554233.jpg",
    },
    {
      id: 4,
      name: "NikkiD",
      lastMessage: "none",
      status: 'online',
      avatar: "https://png.pngtree.com/png-vector/20190217/ourlarge/pngtree-abstract-circle-business-logo-png-image_554233.jpg",
    },
  ];
  return (
    <div className="m-4">
      <StaticBoxes />
      {roomInfo.map((info) => {
        return <RoomBox key={info.id} info={info} />;
      })}
    </div>
  );
};

RoomPanel.propTypes = {};

export default RoomPanel;
