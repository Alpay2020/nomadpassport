import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import React, {useEffect, useState} from "react";

export function GithubLoginButton() {

    const [gitHubLoginUrl, setGitHubLoginUrl] = useState("");

    useEffect(() => {
        fetch("/auth/login/github/url").then(response => response.text() )
            .then(setGitHubLoginUrl)
    },[])

    return  <Button
        startIcon={<GitHubIcon />}
        onClick={() => {
            window.location = "https://github.com/login/oauth/authorize?client_id=Iv1.05ab67c0dfbf9e3c&redirect_uri=https://localhost:3000/oauth/github"
        }}
    >
        Login with Github
    </Button>
}