package de.neuefische.passportpages.controller;

import de.neuefische.passportpages.model.Trip;
import de.neuefische.passportpages.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.security.Principal;


@RestController
@RequestMapping("api/trips")
public class TripController {

    private final TripService tripService;

    @Autowired
    public TripController(TripService tripService) {
        this.tripService = tripService;
    }
    @PutMapping
    public Trip addTrip(@RequestBody @Valid Trip data, Principal principal){
        return tripService.add(data.getDateTripStart(),data.getDateTripEnd(),data.getDestinationCountry(), principal.getName());
    }
    @GetMapping
    public Iterable<Trip> getTripsByUser(Principal principal) {
        return tripService.getAllByUser(principal.getName());
    }
    @DeleteMapping("{id}")
    public void deleteIdea(@PathVariable String id){
        tripService.deleteTrip(id);
    }
    @GetMapping("past")
    public Iterable<Trip> getAllPastTrips(Principal principal){
        return tripService.getPastTrips(principal.getName());
    }
    @GetMapping("future")
    public Iterable<Trip> getAllFutureTrips(Principal principal){
        return tripService.getFutureTrips(principal.getName());
    }
}
