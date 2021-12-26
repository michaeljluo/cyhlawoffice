import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { FormControl, Input, InputLabel, FormHelperText, MenuItem } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import TextField from '@material-ui/core/TextField';
import {KeyboardDatePicker} from '@material-ui/pickers';
import moment from "moment";


const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    "& .MuiFormLabel-root": {
      fontSize: "18px"
    }

  }


}));



function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

export default function ClientDialog( props ) {
  const classes = useStyles();
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

  const [openClient, setOpenClient] = React.useState(props.openClient);
  

  

  const [findOfficeOption, setFindOfficeOption] = React.useState('');

  const handleFindOfficeOptionChange = (event) => {
    setFindOfficeOption(event.target.value);
  };

  const findOfficeOptions = [
    {
      value: 'advertisement',
      label: 'From newspaper advertisement',
    },
    {
      value: 'friends',
      label: 'Referral by friends',
    },
    {
      value: 'brokers',
      label: 'Referral by real estate brokers',
    },
    {
      value: 'other',
      label: 'Other',
    },
  ];
  

  const [contactMethodOption, setContactMethodOption] = React.useState('');

  const handleContactMethodOptionChange = (event) => {
    setContactMethodOption(event.target.value);
  };

  const contactMethodOptions = [
    {
      value: 'cell',
      label: 'Cell phone',
    },
    {
      value: 'home',
      label: 'Home Phone',
    },
    {
      value: 'email',
      label: 'E-mail',
    },
    {
      value: 'text',
      label: 'Text',
    },
    {
      value: 'other',
      label: 'Other',
    },
  ];
  
  
  


  //unused
  const handleClickOpen = () => {
    setOpenClient(true);
  };

  const handleClose = () => {
    setOpenClient(false);
    props.onCloseClient(openClient);
  };

  return(
    <div className="ClientDialog">
        <Dialog 
        maxWidth="sm"
        fullWidth
        open={props.openClient} 
        onClose={handleClose} 
        TransitionComponent={Transition}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        disableBackdropClick 
        disableEscapeKeyDown 
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
        hideBackdrop

        >
          <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <DialogActions>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <CloseIcon/>
                </IconButton>
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                  <Typography variant="h6" className={classes.title}>
                    Client Take-in Sheet

                  </Typography>
                </DialogTitle>
               
                <Button autoFocus color="inherit" onClick={handleClose} style={{marginLeft: "200px"}}>
                  save
                </Button>
              </DialogActions>
            </Toolbar>
          </AppBar>
          <DialogContent dividers={true}>
          <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  id="date"
                  label="Date"
                  type="date"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="outlined"
                  label="Interviewed by"
                  defaultValue=""
                  variant="outlined"
                />
                <TextField
                  id="outlined"
                  label="Client's name"
                  defaultValue=""
                  variant="outlined"
                />
                <TextField
                  id="outlined"
                  label="Client's address"
                  defaultValue=""
                  variant="outlined"
                />
                <TextField
                  id="outlined" 
                  label="Home Phone Number"
                  defaultValue=""
                  variant="outlined"
                />
                <TextField
                  id="outlined"
                  label="Office Phone Number"
                  defaultValue=""
                  variant="outlined"
                />
                <TextField
                  id="outlined"
                  label="Cell Phone Number"
                  defaultValue=""
                  variant="outlined"
                />
                <TextField
                  id="outlined"
                  label="Email"
                  defaultValue=""
                  variant="outlined"
                />
              <TextField
                  id="outlined"
                  label="Occupation"
                  defaultValue=""
                  variant="outlined"
                />

              

              <TextField
                select
                label="How did you find us?"
                value={contactMethodOption}
                onChange={handleContactMethodOptionChange}
              >
                {contactMethodOptions.map((option) => (
                  <MenuItem key={option.label} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>


              <TextField
                id="standard-select-currency"
                select
                label="Preferred method of contact?"
                value={findOfficeOption}
                onChange={handleFindOfficeOptionChange}
              >
                {findOfficeOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

                <TextField
                  id="outlined-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
                <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
                <TextField
                  id="outlined-helperText"
                  label="Helper text"
                  defaultValue="Default Value"
                  helperText="Some important text"
                  variant="outlined"
                />
              </div>
            </form>
          </DialogContent>
          
        </Dialog>
    </div>
  );
}

ClientDialog.propTypes = { open: PropTypes.bool.isRequired };

ClientDialog.defaultProps = {};