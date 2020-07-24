package de.neuefische.passportpages.controller;

import de.neuefische.passportpages.config.FacebookAuthConfig;
import de.neuefische.passportpages.config.GithubAuthConfig;
import de.neuefische.passportpages.model.LoginData;
import de.neuefische.passportpages.model.oauth.FacebookLoginData;
import de.neuefische.passportpages.model.oauth.GithubLoginData;
import de.neuefische.passportpages.security.JWTUtils;
import de.neuefische.passportpages.service.FacebookAuthService;
import de.neuefische.passportpages.service.GithubAuthService;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
@RequestMapping("auth/login")
@RestController
public class LoginController {

    private final AuthenticationManager authenticationManager;
    private final JWTUtils jwtUtils;
    private final GithubAuthService githubAuthService;
    private final GithubAuthConfig githubAuthConfig;
    private final FacebookAuthService facebookAuthService;
    private final FacebookAuthConfig facebookAuthConfig;

    public LoginController(AuthenticationManager authenticationManager, JWTUtils jwtUtils, GithubAuthService githubAuthService, GithubAuthConfig githubAuthConfig, FacebookAuthService facebookAuthService, FacebookAuthConfig facebookAuthConfig) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
        this.githubAuthService = githubAuthService;
        this.githubAuthConfig = githubAuthConfig;
        this.facebookAuthService = facebookAuthService;
        this.facebookAuthConfig = facebookAuthConfig;
    }

    @PostMapping
    public String login(@RequestBody LoginData data){
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(data.getUsername(), data.getPassword()));
            return jwtUtils.createToken(new HashMap<>(), data.getUsername());
        }catch (Exception e){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid credentials");
        }
    }

    @PostMapping("github")
    public String loginWithGithub(@RequestBody GithubLoginData data){
        return githubAuthService.login(data.getCode());
    }
    @GetMapping("github/url")
    private String getGithubLoginUrl(){
        return githubAuthConfig.getLoginUrl();
    }

    @PostMapping("facebook")
    public String loginWithFacebook(@RequestBody FacebookLoginData data){
        return facebookAuthService.login(data.getCode());
    }
    @GetMapping("facebook/url")
    private String getFacebookLoginUrl(){
        return facebookAuthConfig.getLoginUrl();
    }

}