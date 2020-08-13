package de.neuefische.passportpages.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FacebookAuthConfig {

    @Value("${oauth.facebook.client.id}")
    private String clientId;

    @Value("${oauth.facebook.client.secret}")
    private String clientSecret;

    @Value("${oauth.facebook.redirect.url}")
    private String redirectUrl;


    public String getAccessTokenUrl(String code){
        return "https://graph.facebook.com/v7.0/oauth/access_token?client_id=" + clientId + "&client_secret=" + clientSecret + "&code=" + code+ "&redirect_uri=" + redirectUrl;
    }

    public String getUserDataUrl(String accessToken){
        return "https://graph.facebook.com/me?fields=id,name&access_token=" + accessToken;
    }


    public String getLoginUrl() {
        return "https://graph.facebook.com/v7.0/oauth/authorize?client_id=" + clientId + "&redirect_uri=" + redirectUrl;
    }
}