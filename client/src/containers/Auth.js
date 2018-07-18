import React, { Component } from 'react';
import FacebookLogin from '../components/FacebookLogin';

class Auth extends Component {
  state = {
    username: null,
  };

  onFacebookLogin = (loginStatus, resultObject) => {
    if (loginStatus === true) {
      this.setState({
        username: resultObject.user.name,
      });
    }
  };

  render() {
    const { username } = this.state;

    return (
      <div className="Auth">
        <header className="App-header">
          <h1 className="App-title">React Social Media Login</h1>
        </header>

        <div className="App-intro">
          {!username && (
            <div>
              <p>Click on one of any button below to login</p>
              <FacebookLogin onLogin={this.onFacebookLogin}>
                <button>Facebook</button>
              </FacebookLogin>
            </div>
          )}
          {username && <p>Welcome back, {username}</p>}
        </div>
      </div>
    );
  }
}

export default Auth;
