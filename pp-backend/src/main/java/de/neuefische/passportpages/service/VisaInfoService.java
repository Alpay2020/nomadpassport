package de.neuefische.passportpages.service;

import de.neuefische.passportpages.db.VisaInfoMongoDb;
import de.neuefische.passportpages.model.VisaInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class VisaInfoService {

    private final VisaInfoMongoDb visaInfoMongoDb;

    @Autowired
    public VisaInfoService(VisaInfoMongoDb visaInfoMongoDb) {
        this.visaInfoMongoDb = visaInfoMongoDb;
    }
    public Optional<VisaInfo> getVisaInfo(String destination) {
        return visaInfoMongoDb.findById(destination);
    }
}
