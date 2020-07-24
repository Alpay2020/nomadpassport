package de.neuefische.passportpages.service;


import de.neuefische.passportpages.config.FacebookAuthConfig;
import de.neuefische.passportpages.db.UserDb;
import de.neuefische.passportpages.model.PassportUser;
import de.neuefische.passportpages.model.UserSource;
import de.neuefische.passportpages.model.oauth.FacebookAccessTokenResponse;
import de.neuefische.passportpages.model.oauth.FacebookUserData;
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
public class FacebookAuthService {

    private final UserDb userDb;
    private final JWTUtils jwtUtils;
    private final FacebookAuthConfig authConfig;

    @Autowired
    public FacebookAuthService(UserDb userDb, JWTUtils jwtUtils, FacebookAuthConfig authConfig) {
        this.userDb = userDb;
        this.jwtUtils = jwtUtils;
        this.authConfig = authConfig;
    }


    public String login(String code) {
        FacebookAccessTokenResponse tokenResponse = getFacebookAccessToken(code);

        FacebookUserData userData = getUserData(tokenResponse.getAccess_token());


        PassportUser passportUser = saveUpdateUserData(userData);

        return jwtUtils.createToken(new HashMap<>(Map.of(
                "displayName", passportUser.getDisplayName()
        )), passportUser.getUsername());
    }

    private PassportUser saveUpdateUserData(FacebookUserData userData) {
        Optional<PassportUser> optionalUser = userDb.findById("facebook/" + userData.getId());

        if (optionalUser.isEmpty()) {
            PassportUser user = new PassportUser("facebook/" + userData.getId(), null, userData.getName(), null, "user", UserSource.FACEBOOK);
            userDb.save(user);
            return user;
        }

        PassportUser passportUser = optionalUser.get();

        if (passportUser.getSource() != UserSource.FACEBOOK) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "username already exists");
        }

        passportUser.setDisplayName(userData.getName());
        passportUser.setAvatarUrl(null);
        userDb.save(passportUser);
        return passportUser;
    }

    private FacebookAccessTokenResponse getFacebookAccessToken(String code) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));
        HttpEntity entity = new HttpEntity(headers);
        ResponseEntity<FacebookAccessTokenResponse> response = restTemplate.postForEntity(authConfig.getAccessTokenUrl(code), entity, FacebookAccessTokenResponse.class);
        if (response.getStatusCode() != HttpStatus.OK) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid credentials for facebook");
        }
        return response.getBody();
    }

    private FacebookUserData getUserData(String accessToken) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Authorization", "token " + accessToken);
        HttpEntity entity = new HttpEntity(headers);
        ResponseEntity<FacebookUserData> response = restTemplate.exchange(authConfig.getUserDataUrl(accessToken), HttpMethod.GET, entity, FacebookUserData.class);
        if (response.getStatusCode() != HttpStatus.OK) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid access token");
        }
        return response.getBody();
    }

}