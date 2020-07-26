package de.neuefische.passportpages.controller;

import de.neuefische.passportpages.model.Trip;
import de.neuefische.passportpages.service.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public Trip addTrip(@RequestBody Trip data){
        return tripService.add(data.getDateTripStart(),data.getDateTripEnd(),data.getDestinationCountry());
    }
}
