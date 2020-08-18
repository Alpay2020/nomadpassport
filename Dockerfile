
FROM openjdk:14

ENV ENVIRONMENT=prod

MAINTAINER Alpay Ergindemir <alpay.ergindemir@live.de>

ADD pp-backend/target/pp-backend.jar pp-backend.jar

CMD ["sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGODB_URI -Dauth.jwt.secret=$JWT_SECRET -Doauth.github.client.id=$OAUTH_GITHUB_CLIENT_ID -Doauth.github.client.secret=$OAUTH_GITHUB_CLIENT_SECRET -Doauth.github.redirecturl=$OAUTH_GITHUB_REDIRECT_URL -Doauth.facebook.client.id=$OAUTH_FACEBOOK_CLIENT_ID -Doauth.facebook.client.secret=$OAUTH_FACEBOOK_CLIENT_SECRET -Doauth.facebook.redirecturl=$OAUTH_FACEBOOK_REDIRECT_URL -jar /pp-backend.jar"]