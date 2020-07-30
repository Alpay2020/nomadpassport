package de.neuefische.passportpages.service;

import de.neuefische.passportpages.db.TripMongoDb;
import de.neuefische.passportpages.model.Trip;
import de.neuefische.passportpages.utils.IdUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TripService {

    private final IdUtils idUtils;
    private final TripMongoDb tripMongoDb;

    @Autowired
    public TripService(IdUtils idUtils, TripMongoDb tripMongoDb) {
        this.idUtils = idUtils;
        this.tripMongoDb = tripMongoDb;
    }
    public Trip add(String dateTripStart, String dateTripEnd, String destinationCountry) {
        Trip trip = new Trip();
        trip.setId(idUtils.generateRandomId());
        trip.setDateTripStart(dateTripStart);
        trip.setDateTripEnd(dateTripEnd);
        trip.setDestinationCountry(destinationCountry);
        return tripMongoDb.save(trip);
    }

    public Iterable<Trip> getAll() {
        return tripMongoDb.findAll();
    }

    public void deleteTrip(String id) {
        tripMongoDb.deleteById(id);
    }
}
