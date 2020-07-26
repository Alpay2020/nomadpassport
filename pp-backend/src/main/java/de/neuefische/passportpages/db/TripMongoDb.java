package de.neuefische.passportpages.db;

import de.neuefische.passportpages.model.Trip;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface TripMongoDb extends PagingAndSortingRepository<Trip,String> {
}