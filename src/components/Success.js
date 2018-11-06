import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {
  contine = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank you for Your Submission</h1>
          <p>You will not get an email with further instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
