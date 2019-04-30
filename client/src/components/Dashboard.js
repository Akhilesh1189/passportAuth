import React, { Component } from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import * as actions from '../actions';

class Dashboard extends Component {
  async componentDidMount() {
    this.props.getDashboard()
  }

  linkFacebook = async (res) => {
    console.log('Link with Facebook', res)  
    await this.props.linkFacebook(res.accessToken);
  }
  
  unlinkFacebook = async (res) => {
    console.log('Unlink Facebook')  
    await this.props.unlinkFacebook();
  }

  render() {
    return (
      <div>
        This is a Dashboard component
        <br/>
        Our secret: <h3>{this.props.secret}</h3>

        <h2>Link your social media accounts</h2>
      
        <FacebookLogin
  appId="642246559554873"
  autoLoad={true}
        fields="name,email,picture"
  callback={this.linkFacebook}
  render={renderProps => (
    <button onClick={renderProps.onClick}>This is my custom FB button</button>
  )}
/>
       
        <br />
        <br />
        <br />
        <h2>Unlink your social media accounts</h2>
        <button 
          style={{ marginRight: 15 }} 
          className="btn btn-primary" 
          onClick={ () => this.unlinkFacebook() } 
          disabled={ this.props.dashboard.methods.includes('facebook') ? false : true }
        >
          Unlink with Facebook
        </button>
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
