import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));


export default function TakeInWindow() {
  const classes = useStyles();
  return(
    <div className="TakeInWindow">
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
      </FormControl>
    </div>
  );
}

CaseDialog.propTypes = {};

CaseDialog.defaultProps = {};