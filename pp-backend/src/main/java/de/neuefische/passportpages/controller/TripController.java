package de.neuefische.passportpages.controller;

import de.neuefische.passportpages.model.Trip;
import de.neuefische.passportpages.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/trips")
public class TripController {

    private final TripService tripService;

    @Autowired
    public TripController(TripService tripService) {
        this.tripService = tripService;
    }
    @PutMapping
    public Trip addTrip(@RequestBody Trip data){
        return tripService.add(data.getDateTripStart(),data.getDateTripEnd(),data.getDestinationCountry());
    }
    @GetMapping
    public Iterable<Trip> getTrips() {
        return tripService.getAll();
    }
    @DeleteMapping("{id}")
    public void deleteIdea(@PathVariable String id){
        tripService.deleteTrip(id);
    }
}
