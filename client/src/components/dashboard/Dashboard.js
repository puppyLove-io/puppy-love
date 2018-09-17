import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class Dashboard extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        return;
      case false:
        return <h2 align="center">Log in pls</h2>
      default:
        return (
          <h2 align="center">Hi {this.props.auth.username}</h2>
        )
    }
  }


  render() {

    return (
      <div className="dashboard">{this.renderContent()}</div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Dashboard);
