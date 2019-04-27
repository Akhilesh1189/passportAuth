import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import * as actions from '../actions';

class Dashboard extends Component {
  async componentDidMount() {
    this.props.getDashboard()
  }

  


  render() {
    return (
      <div>
        This is a Dashboard component User Login sucessfully!!
        <br/>


        <h2>Login with Facebook accounts</h2>
        <FacebookLogin
          appId="171335970085090"
          disabled={true}
          render={renderProps => (
            <button style={{ marginRight: 15 }} className="btn btn-primary" onClick={renderProps.onClick} disabled={this.props.dashboard.methods.includes('facebook') ? true : false}>Link with Facebook</button>
          )}
          fields="name,email,picture"
          callback={this.linkFacebook}
          cssClass="btn btn-outline-primary"
        />
        <br />
        <br />
        <br />

      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state', state)
  return {
    secret: state.dash.secret,
    dashboard: state.dash,
    auth: state.auth
  }
}

export default connect(mapStateToProps, actions)(Dashboard);
