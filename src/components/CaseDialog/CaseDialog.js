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

  const [caseOpen, setCaseOpen] = React.useState(props.caseOpen);
  const [clientOpen, setClientOpen] = React.useState(false);

  //callback for child to use
  const callbackClientClose = React.useCallback(open => {
    setClientOpen(open);
  });

  //unused
  const handleCaseOpen = () => {
    setCaseOpen(true);
  };

  const handleCaseClose = () => {
    setCaseOpen(false);
    props.callbackCaseClose(false);
  };

  return(
    <div className="CaseDialog">
      <Container>
        <div className="CaseInformation">
          <Dialog fullScreen open={props.caseOpen} onClose={handleCaseClose} TransitionComponent={Transition}>
            <AppBar position="static" className={classes.appBar}>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleCaseClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Case Information
                </Typography>
              </Toolbar>
            </AppBar>
            <List>
              <ListItem button onClick={() => {setClientOpen(true); handleCaseClose();}}>
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
        <ClientDialog clientOpen={clientOpen} callbackClientClose={callbackClientClose}></ClientDialog>
      </Container>
    </div>
  );
}

CaseDialog.propTypes = { caseOpen: PropTypes.bool.isRequired };

CaseDialog.defaultProps = {};