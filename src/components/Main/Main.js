import React, { Component } from "react";
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'number', headerName: 'Case Number', width: 300 },
    { field: 'status', headerName: 'Status', width: 300 },
    { field: 'address', headerName: 'Address of Subject Property', width: 500 }
  ];
  /*
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    }
  */
  
  const rows = [
    { id:1, number: "RE-Q-001", status: "Active", address: '91 2nd Ave' },
    { id:2, number: "RE-Q-002", status: "Closed", address: '93 2nd Ave' }
  ];

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Main() {
  const classes = useStyles();

  const [selectionModel, setSelectionModel] = React.useState([]);
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return(
    <div className="Main">
      <Container>
        <h1>Chi Yuan Huang Law Office Home Page</h1>
        <h2 className="subheader" align="left">Case List</h2>
        <div className="caseList">
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    onSelectionModelChange={(newSelection) => {
                        setSelectionModel(newSelection.selectionModel);
                        setOpen(true);
                    }}
                    selectionModel={selectionModel}
                />
            </div>
        </div>
        
        {//use selectionModel here
        }
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Sound
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Phone ringtone" secondary="Titania" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Default notification ringtone" secondary="Tethys" />
            </ListItem>
          </List>
        </Dialog>
      </Container>
    </div>
  );
  
}

Main.propTypes = {};

Main.defaultProps = {};