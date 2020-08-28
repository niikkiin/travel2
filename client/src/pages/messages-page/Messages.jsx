import React from "react";
import PropTypes from "prop-types";

// material ui
import { makeStyles, Container } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import SendMessage from "components/send-message/SendMessage";
import MessagePanel from "components/message-panel/MessagePanel";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "1000px",
    }
}))


const MessagesPage = (props) => {
    const classes = useStyles();

  return (
    <Container className={classes.root}>
        <MessagePanel />
        <SendMessage />
    </Container>
  );
};

MessagesPage.propTypes = {};

export default MessagesPage;
