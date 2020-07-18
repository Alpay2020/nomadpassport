
FROM openjdk:14

ENV ENVIRONMENT=prod

MAINTAINER Alpay Ergindemir <alpay.ergindemir@live.de>

ADD pp-backend/target/pp-backend.jar app.jar

CMD ["sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$MONGODB_URI -Dauth.jwt.secret=$JWT_SECRET -Doauth.github.client.id=$GITHUB_CLIENT_ID -Doauth.github.client.secret=$GITHUB_CLIENT_SECRET -Doauth.github.redirecturl=$GITHUB_REDIRECT_URL -jar /app.jar"]