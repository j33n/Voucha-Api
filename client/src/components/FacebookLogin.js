import React, { Component } from 'react';

class FacebookLogin extends Component {
  componentDidMount() {
    document.addEventListener('FBObjectReady', this.initializeFacebookLogin);
  }

  componentWillUnmount() {
    document.removeEventListener('FBObjectReady', this.initializeFacebookLogin);
  }

  /**
   * Init FB object and check Facebook Login status
   */
  initializeFacebookLogin = () => {
    this.FB = window.FB;
    this.checkLoginStatus();
  };

  /**
   * Check login status
   */
  checkLoginStatus = () => {
    this.FB.getLoginStatus(this.facebookLoginHandler);
  };

  /**
   * Check login status and call login api is user is not logged in
   */
  facebookLogin = () => {
    if (!this.FB) return;

    this.FB.getLoginStatus((response) => {
      if (response.status === 'connected') {
        this.facebookLoginHandler(response);
      } else {
        this.FB.login(this.facebookLoginHandler, { scope: 'public_profile' });
      }
    });
  };

  /**
   * Handle login response
   */
  facebookLoginHandler = (response) => {
    if (response.status === 'connected') {
      this.FB.api(
        '/me',
        {
          fields:
            'id,about,age_range,picture,birthday,context,email,first_name,gender,hometown,link,location,middle_name,name,timezone,website,work',
        },
        (userData) => {
          let result = {
            ...response,
            user: userData,
          };
          console.log('result :', result);
          this.props.onLogin(true, result);
        }
      );
    } else {
      this.props.onLogin(false);
    }
  };

  render() {
    let { children } = this.props;
    return <div onClick={this.facebookLogin}>{children}</div>;
  }
}

export default FacebookLogin;
