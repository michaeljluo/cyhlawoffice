import React, { Component } from "react";
import PropTypes from 'prop-types';

import CaseDialog from '../CaseDialog/CaseDialog'

import { Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

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



export default function Main() {
  const classes = useStyles();

  const [selectionModel, setSelectionModel] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const onClose = React.useCallback(open => {
    setOpen(open);
  });



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
        <CaseDialog open={open} onClose={onClose}></CaseDialog>

      </Container>
    </div>
  );
  
}

Main.propTypes = {};

Main.defaultProps = {};