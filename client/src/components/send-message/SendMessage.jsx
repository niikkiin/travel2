 
import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
    textAlign: 'center',
    margin: 'auto !important',
    padding: '0 0px 0 20px',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: '40px',
    color: 'lightgray',
  },
  inputWrapper: {
    width: ' 100%',
    height: '80px',
    backgroundColor: '#ededed',
    border: ' 1px solid lightgray',
    display: 'flex',
    marginBottom: '10px',
  },
  textInput: {
    height: '60%',
    width: '90%',
    margin: ' auto 0 auto 16px',
    paddingLeft: '16px',
    border: 'none',
    outline: 'none',
    '::placeholder': {
      opacity: 0.5,
    },
  },
}))

type Props = {
  sndMsg: ({ content: string }) => void,
  roomId: string,
  newMessage: () => void,
}

export default ((props: Props) => {
  const classes = useStyles()
  
  return (
    <form noValidate>
      <Grid container className={classes.root}>
        <div className={classes.inputWrapper}>
          <input
            className={classes.textInput}
            placeholder="Type Here..."
          />
          <Icon className={classes.rightIcon}>attach_file</Icon>
        </div>
      </Grid>
    </form>
  )
})