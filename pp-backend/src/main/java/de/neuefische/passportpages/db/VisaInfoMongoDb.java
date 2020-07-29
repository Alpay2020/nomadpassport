package de.neuefische.passportpages.db;

import de.neuefische.passportpages.model.VisaInfo;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface VisaInfoMongoDb extends PagingAndSortingRepository<VisaInfo,String> {
}
