package de.neuefische.passportpages.controller;

import de.neuefische.passportpages.db.TripMongoDb;
import de.neuefische.passportpages.db.UserDb;
import de.neuefische.passportpages.model.LoginData;
import de.neuefische.passportpages.model.PassportUser;
import de.neuefische.passportpages.model.Trip;
import de.neuefische.passportpages.model.UserSource;
import de.neuefische.passportpages.utils.IdUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class TripControllerTest {

    @LocalServerPort
    public int port;

    @Autowired
    public TestRestTemplate restTemplate;

    @Autowired
    private TripMongoDb tripMongoDb;

    @MockBean
    private IdUtils idUtils;

    @Autowired
    public PasswordEncoder encoder;

    @Autowired
    public UserDb userDb;


    @BeforeEach
    public void resetDatabase() {
        tripMongoDb.deleteAll();
        userDb.deleteAll();
    }

    private String loginUser() {
        String savePassword = "savePassword";
        PassportUser user = new PassportUser("superUser", encoder.encode(savePassword),"admin",null, UserSource.CUSTOM);
        userDb.save(user);

        String loginUrl = "http://localhost:" + port + "/auth/login";
        ResponseEntity<String> tokenResponse = restTemplate.postForEntity(loginUrl, new LoginData("superUser", "savePassword"), String.class);
        return tokenResponse.getBody();
    }

    @Test
    public void getTripsShouldReturnAllTrips() {

        //GIVEN
        String token = loginUser();
        String url = "http://localhost:" + port + "/api/trips";
//        tripMongoDb.save(new Trip("1","18-09-2020", "20-09-2020", "country1","user1"));
        tripMongoDb.save(new Trip("2","09-10-2020", "18-10-2020", "country2", "superUser"));


        //WHEN
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity entity = new HttpEntity(headers);
        ResponseEntity<Trip[]> response = restTemplate.exchange(url, HttpMethod.GET, entity, Trip[].class);

        //THEN
        assertEquals(response.getStatusCode(), HttpStatus.OK);
        Trip[] trips = response.getBody();
        assertEquals(trips.length, 1);
//        assertEquals(trips[0], new Trip("1","18-09-2020", "20-09-2020", "country1","user1"));
        assertEquals(trips[0], new Trip("2","09-10-2020", "18-10-2020", "country2","superUser"));
    }

    @Test
    public void addTripShouldAddTrip() {
        // GIVEN
        String token = loginUser();

        when(idUtils.generateRandomId()).thenReturn("some-random-id");

        Trip trip = new Trip("some-random-id","09-10-2020", "18-10-2020", "country2","testuser2");
        String url = "http://localhost:" + port + "/api/trips";

        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity<Trip> requestEntity = new HttpEntity<>(trip, headers);

        // WHEN
        ResponseEntity<Trip> putResponse = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, Trip.class);

        // THEN
        Trip expectedTrip = new Trip("some-random-id", "09-10-2020", "18-10-2020", "country2","superUser");
        assertEquals(HttpStatus.OK, putResponse.getStatusCode());
        assertNotNull(putResponse.getBody());
        assertEquals(expectedTrip, putResponse.getBody());

        Optional<Trip> byId = tripMongoDb.findById("some-random-id");
        assertTrue(byId.isPresent());
        assertEquals(byId.get(), expectedTrip);
    }

    @Test
    @DisplayName("delete by id should delete trip with same id")
    public void deleteTrip(){
        //GIVEN
        String token = loginUser();
        tripMongoDb.save(new Trip("1","18-09-2020", "20-09-2020", "country1","testuser"));
        tripMongoDb.save(new Trip("2","09-10-2020", "18-10-2020", "country2","testuser2"));

        //WHEN
        String url = "http://localhost:" + port + "/api/trips/2";
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(token);
        HttpEntity entity = new HttpEntity(headers);
        restTemplate.exchange(url,HttpMethod.DELETE,entity,Void.class);

        //THEN
        assertTrue(tripMongoDb.findById("2").isEmpty());
    }
}
