import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import React, {useEffect, useState} from "react";

export function FacebookLoginButton() {

    const [facebookLoginUrl, setFacebookLoginUrl] = useState("");

    useEffect(() => {
        fetch("/auth/login/facebook/url").then(response => response.text() )
            .then(setFacebookLoginUrl)
    },[])

    return  <Button
        startIcon={<FacebookIcon />}
        onClick={() => {
            window.location = facebookLoginUrl
        }}
    >
        Login with Facebook
    </Button>
}