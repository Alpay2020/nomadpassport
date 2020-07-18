import React from 'react';
import FacebookLogin from 'react-facebook-login';

class FacebookLoginButton extends React.Component {
    responseFacebook(response) {
        console.log(response);
    }

    render() {
        return (
            <FacebookLogin
                appId="667921943933460"
                autoLoad={true}
                fields="name,email,picture"
                scope="public_profile"
                callback={this.responseFacebook}
            />
        )
    }
}

export default FacebookLoginButton;