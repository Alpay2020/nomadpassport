package de.neuefische.passportpages.service;


import de.neuefische.passportpages.config.GithubAuthConfig;
import de.neuefische.passportpages.db.UserDb;
import de.neuefische.passportpages.model.PassportUser;
import de.neuefische.passportpages.model.UserSource;
import de.neuefische.passportpages.model.oauth.GithubAccessTokenResponse;
import de.neuefische.passportpages.model.oauth.GithubUserData;
import de.neuefische.passportpages.security.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class GithubAuthService {

    private final UserDb userDb;
    private final JWTUtils jwtUtils;
    private final GithubAuthConfig authConfig;

    @Autowired
    public GithubAuthService(UserDb userDb, JWTUtils jwtUtils, GithubAuthConfig authConfig) {
        this.userDb = userDb;
        this.jwtUtils = jwtUtils;
        this.authConfig = authConfig;
    }


    public String login(String code) {
        GithubAccessTokenResponse tokenResponse = getGithubAccessToken(code);

        GithubUserData userData = getUserData(tokenResponse.getAccess_token());


        PassportUser passportUser = saveUpdateUserData(userData);

        return jwtUtils.createToken(new HashMap<>(Map.of(
                "displayName", passportUser.getDisplayName()
        )), passportUser.getUsername());
    }

    private PassportUser saveUpdateUserData(GithubUserData userData) {
        Optional<PassportUser> optionalUser = userDb.findById("github/" + userData.getLogin());

        if (optionalUser.isEmpty()) {
            PassportUser user = new PassportUser("github/" + userData.getLogin(), null, userData.getName(), null, "user", UserSource.GITHUB);
            userDb.save(user);
            return user;
        }

        PassportUser passportUser = optionalUser.get();

        if (passportUser.getSource() != UserSource.GITHUB) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "username already exists");
        }

        passportUser.setDisplayName(userData.getName());
        passportUser.setAvatarUrl(null);
        userDb.save(passportUser);
        return passportUser;
    }

    private GithubAccessTokenResponse getGithubAccessToken(String code) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));
        HttpEntity entity = new HttpEntity(headers);
        ResponseEntity<GithubAccessTokenResponse> response = restTemplate.postForEntity(authConfig.getAccessTokenUrl(code), entity, GithubAccessTokenResponse.class);
        if (response.getStatusCode() != HttpStatus.OK) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid credentials for github");
        }
        return response.getBody();
    }

    private GithubUserData getUserData(String accessToken) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "token " + accessToken);
        HttpEntity entity = new HttpEntity(headers);
        ResponseEntity<GithubUserData> response = restTemplate.exchange(authConfig.getUserDataUrl(), HttpMethod.GET, entity, GithubUserData.class);
        if (response.getStatusCode() != HttpStatus.OK) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid access token");
        }
        return response.getBody();
    }

}