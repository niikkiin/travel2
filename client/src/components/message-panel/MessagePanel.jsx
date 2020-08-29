import React from "react";
// import PropTypes from "prop-types";

// material ui
import { makeStyles, Container } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "calc(100vh - 120px)",
    // height: "100vh",
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    padding: "0 20px",
    [theme.breakpoints.down("sm")]: {
      height: "calc(100vh - 170px)",
    },
  },
  messagesContainer: {
    overflow: "hidden",
    position: "relative",
    height: "100%",
    width: "100%",
    fontSize: "14px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      marginBottom: "10px",
    },
  },
  messages: {
    overflowY: "auto",
    overflowX: "hidden",
    position: "absolute",
    transform: "rotate(180deg)",
    direction: "rtl",
    bottom: 0,
    maxHeight: "100%",
    width: "100%",
    padding: "0 0px",
  },
  leftMessageWrapper: {
    maxWidth: "60%",
    transform: "rotate(180deg)",
    direction: "ltr",
  },
  rightMessageWrapper: {
    maxWidth: "100%",
    transform: "rotate(180deg)",
    direction: "ltr",
  },
  leftMessage: {
    display: "flex",
    marginTop: 20,
    maxWidth: "70%",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "80%",
    },
  },
  rightMessage: {
    paddingRight: "50%",
    maxWidth: "100%",
    display: "flex",
    marginTop: 20,
  },
  time: {
    fontStyle: "italic",
    fontSize: 10,
    marginLeft: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: "6px",
    },
  },
  userImage: {
    height: "100px",
    width: "100px",
    borderRadius: "50px",
    border: "1px solid #e0e0e0",
    [theme.breakpoints.down("sm")]: {
      height: "70px",
      width: "70px",
    },
  },
  userInfo: {
    display: "flex",
    marginLeft: "-50px",
    height: "80px",
    marginTop: "10px",
    border: "1px solid #e0e0e0",
    width: "100%",
    backgroundColor: "#f5f5f5",
    [theme.breakpoints.down("sm")]: {
      marginLeft: -30,
      height: 50,
    },
  },
  messageText: {
    padding: "10px 15px",
    borderRadius: "10px",
    fontWeight: 500,
    wordBreak: "break-word",
    border: "1px solid #e0e0e0",
    [theme.breakpoints.down("sm")]: {
      padding: "7px 12px",
    },
  },
  roomInfoWrapper: {
    height: "100px",
    width: "100%",
    margin: "10px 0",
    
    display: "flex",
  },
  nameAndOnlineStatusWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    // textAlign: "center",
    marginLeft: "8%",
    flex: "1",
  },
  name: {
    fontSize: "20px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
  },
  groupName: {
    fontWeight: "bold",
    justifyContent: "center",
    margin: " auto 0",
    fontSize: "30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  onlineStatus: {
    fontStyle: "italic",
    fontSize: "12px",
    lineHeight: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  },
  travelTags: {
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: 1,
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
    display: "flex",
    // justifyContent: "space-around",
  },
  individualTravelTag: {
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: 1,
    marginRight: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  },
  businessDetailWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    lineHeight: 0,
    flex: "1",
  },
  business: {
    fontSize: "18px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
    },
  },
  website: {
    fontSize: "16px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "6px",
    },
  },
  iconWrapper: {
    display: "flex",
    flex: "1",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  attachFileIcon: {
    fontSize: " 70px",
    color: "lightgray",
  },
}));

const MessagePanel = (props) => {
  const classes = useStyles();

  const renderRightMessage = (message: Message) => (
    <div className={classes.rightMessage} key={message.id}>
      <div className={classes.rightMessageWrapper}>
        <span className={classes.time}>
          Samantha - August 28, 2020
        </span>
        <div className={classes.messageText} style={{backgroundColor: '#f1f8e9'}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, dignissimos temporibus recusandae provident accusamus quis unde labore ab dolores eum. Similique error aut ab fugiat minus illo ipsa facere repudiandae
        </div>
      </div>
    </div>
  )

  const renderLeftMessage = (message: Message) => (
    <div className={classes.leftMessage} key={message.id}>
      <div className={classes.leftMessageWrapper}>
        <span className={classes.time}>You - August 28, 2020</span>
        <div className={classes.messageText} style={{backgroundColor: '#e1f5fe'}}>
          Hello, have a nice day
        </div>
      </div>
    </div>
  )

  return (
    <Container>
      <div className={classes.root}>
        <div className={classes.roomInfoWrapper}>
          <div style={{ display: "flex", zIndex: 1 }}>
            {/* {roomName !== 'Main' && (
            <div style={{marginRight: '-18px', zIndex: 2}}> {renderOnlineStatus(roomName)}</div>
          )} */}
            {/* <div style={{ marginRight: "-18px", zIndex: 2 }}></div> */}
            <img
              className={classes.userImage}
              src="https://png.pngtree.com/png-vector/20190217/ourlarge/pngtree-abstract-circle-business-logo-png-image_554233.jpg"
              alt="user"
            />
          </div>
          <div
            className={classes.userInfo}
            //   style={{
            //     justifyContent: roomName === 'Main' ? 'center' : 'space-between'
            //   }}
          >
            {/* {roomName === 'Main' && 
            <div className={classes.groupName}>
              <center>
                <h4>Welcome! Pick conversation on the left to start chatting</h4>
              </center>
            </div>
          } */}
            {/* {roomName !== 'Main' && ( */}
            <React.Fragment>
              <div className={classes.nameAndOnlineStatusWrapper}>
                <div className={classes.name}>Samantha Smitt</div>
                <div className={classes.onlineStatus}>
                Online 17 hours ago
                </div>
                <div className={classes.travelTags}>
                    <div className={classes.individualTravelTag}>#EcoTours</div>
                    <div className={classes.individualTravelTag}>#Thailand</div>
                    <div className={classes.individualTravelTag}>#Mangrooves</div>
                </div>
              </div>


              <div className={classes.businessDetailWrapper}>
                <div className={classes.business}>Eco-Tours</div>
                <div className={classes.website}>www.ecotours.com</div>
              </div>
              <div className={classes.iconWrapper}>
                <Icon className={classes.attachFileIcon}>more_vert</Icon>
              </div>
            </React.Fragment>
            {/* )} */}
          </div>
        </div>
        <div className={classes.messagesContainer}>
          <div className={classes.messages} id="messages">
            {/* {messages &&
          messages.map(message => {
            if (message.user_id === localUser.id) {
              return renderLeftMessage(message)
            }
            return renderRightMessage(message)
          })} */}
            {renderLeftMessage("Hello, have a nice day")}
            {renderRightMessage("Hello, have a nice day")}
          </div>
        </div>
      </div>
    </Container>
  );
};

MessagePanel.propTypes = {};

export default MessagePanel;
