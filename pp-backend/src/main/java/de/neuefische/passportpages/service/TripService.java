package de.neuefische.passportpages.service;

import de.neuefische.passportpages.db.TripMongoDb;
import de.neuefische.passportpages.model.Trip;
import de.neuefische.passportpages.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@Service
public class TripService {

    private final IdUtils idUtils;
    private final TripMongoDb tripMongoDb;

    @Autowired
    public TripService(IdUtils idUtils, TripMongoDb tripMongoDb) {
        this.idUtils = idUtils;
        this.tripMongoDb = tripMongoDb;
    }

    public Trip add(String dateTripStart, String dateTripEnd, String destinationCountry, String user) {
        Trip trip = new Trip();
        trip.setId(idUtils.generateRandomId());
        trip.setDateTripStart(dateTripStart);
        trip.setDateTripEnd(dateTripEnd);
        trip.setDestinationCountry(destinationCountry);
        trip.setUser(user);
        return tripMongoDb.save(trip);
    }

    public Iterable<Trip> getAllByUser(String user) {
        return tripMongoDb.findByUser(user);
    }

    public void deleteTrip(String id) {
        tripMongoDb.deleteById(id);
    }

    public Iterable<Trip> getFutureTrips(String user) {
        //final list
        List<Trip> futureTrips = new ArrayList<>();

        //current date
        LocalDate currentDate = LocalDate.now();

        //database listfetch
        List<Trip> tripList = (List<Trip>) tripMongoDb.findByUser(user);

        //loop through triplist
        for (int i = 0; i < tripList.size(); i++) {
            //get single trip-date
            String tripDate = tripList.get(i).getDateTripEnd();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd", Locale.ENGLISH);
            LocalDate dateTime = LocalDate.parse(tripDate, formatter);
            //compare trip-date and current date
            if (currentDate.compareTo(dateTime) <= 0) {
                // if tripdate
                futureTrips.add(tripList.get(i));
            }
        }
        return futureTrips;
    }

    public Iterable<Trip> getPastTrips(String user) {
        //final list
        List<Trip> pastTrips = new ArrayList<>();

        //current date
        LocalDate currentDate = LocalDate.now();

        //database listfetch
        List<Trip> tripList = (List<Trip>) tripMongoDb.findByUser(user);

        //loop through triplist
        for (int i = 0; i < tripList.size(); i++) {
            //get single trip-date
            String tripDate = tripList.get(i).getDateTripEnd();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd", Locale.ENGLISH);
            LocalDate dateTime = LocalDate.parse(tripDate, formatter);
            //compare trip-date and current date
            if (currentDate.compareTo(dateTime) >= 0) {
                // if tripdate
                pastTrips.add(tripList.get(i));
            }
        }
        return pastTrips;
    }

}
