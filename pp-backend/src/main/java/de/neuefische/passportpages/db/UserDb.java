package de.neuefische.passportpages.db;

import de.neuefische.passportpages.model.PassportUser;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserDb extends PagingAndSortingRepository<PassportUser,String> {
}