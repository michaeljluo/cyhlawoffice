import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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
    </div>
  );
}

CaseDialog.propTypes = {};

CaseDialog.defaultProps = {};