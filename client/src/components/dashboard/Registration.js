import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class Registration extends Component {
  render() {
    return (
      <div className="register-page">
        <h2>Finish registration</h2>
        <form action="/api/register" method="POST" className="register">
          <input name="username" placeholder="username" />
          <input name="firt-name" placeholder="first name" />
          <input name="last-name" placeholder="last name" />
          <input name="location" placeholder="location" />
          <Link to="/dashboard"><input type="submit" /></Link>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Registration);
