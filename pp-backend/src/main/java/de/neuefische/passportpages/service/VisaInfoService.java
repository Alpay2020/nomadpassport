package de.neuefische.passportpages.service;

import de.neuefische.passportpages.db.VisaInfoMongoDb;
import de.neuefische.passportpages.model.VisaInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Random;


@Service
public class VisaInfoService {

    private final VisaInfoMongoDb visaInfoMongoDb;

    @Autowired
    public VisaInfoService(VisaInfoMongoDb visaInfoMongoDb) {
        this.visaInfoMongoDb = visaInfoMongoDb;
    }

    public Optional<VisaInfo> getVisaInfo(String id) {
        return visaInfoMongoDb.findById(id);
    }

    public Optional<VisaInfo> getRandomVisaInfo(String randomId){
        Random randomVisaInfo = new Random();
        int idResult = randomVisaInfo.nextInt(195);
        idResult += 1;
        randomId = Integer.toString(idResult);
        return visaInfoMongoDb.findById(randomId);


    }

}
