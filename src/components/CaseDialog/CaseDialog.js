import React from 'react';
import PropTypes from 'prop-types';

import ClientDialog from '../ClientDialog/ClientDialog'

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { Container } from "react-bootstrap";


const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CaseDialog( props ) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(props.open);
  const [openClient, setOpenClient] = React.useState(false);

  //callback for child to use
  const onCloseClient = React.useCallback(openClient => {
    setOpenClient(openClient);
  });

  //unused
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.onClose(open);
  };

  return(
    <div className="CaseDialog">
      <Container>
        <div className="CaseInformation">
          <Dialog fullScreen open={props.open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar position="static" className={classes.appBar}>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Case Information
                </Typography>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem button onClick={() => setOpenClient(true)}>
                <ListItemText primary="Client Information" secondary="Take-in Sheet" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Case Status"/>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Letters"/>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Other Documents"/>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Title Reports"/>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Title Report Order"/>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Closing"/>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="After Closing"/>
              </ListItem>
            </List>
          </Dialog>
        </div>
        <ClientDialog openClient={openClient} onCloseClient={onCloseClient}></ClientDialog>
      </Container>
    </div>
  );
}

CaseDialog.propTypes = { open: PropTypes.bool.isRequired };

CaseDialog.defaultProps = {};