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
            window.location = gitHubLoginUrl
        }}
    >
        Login with Github
    </Button>
}